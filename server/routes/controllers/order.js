const Order = require('../../models/order')
const mongoose=require('mongoose')
const Product=require('../../models/product')
const asyncHandler = require('../../middleware/async');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const ErrorResponse = require('../../utils/errorResponse');
const verifyProductsAndGetTotaLPrice=async (products)=>{
    const ProductIDs=[]
    const ProductIdToCartQuantity={}
    products.forEach(product=>{
        ProductIDs.push(mongoose.Types.ObjectId(product._id))
        ProductIdToCartQuantity[product._id]=product.cartQuantity
    })
    console.log(ProductIDs)
    const productsOnCart=await Product.find({_id:ProductIDs},['name','price','thumbImage','id']).lean()
    const getTotalPriceAndList=(data)=>{
        const clonedData=[...data]
        let totalPrice=1.99
        const OrderItems=clonedData.map(data=>{
            totalPrice+=data.price*ProductIdToCartQuantity[data._id.toString()]
            return {...data,cartQuantity:ProductIdToCartQuantity[data._id.toString()],product:data._id}
        })

        return [OrderItems,totalPrice]
    }
    const [newProductsOnCart,totalPrice]=getTotalPriceAndList(productsOnCart)
    return [newProductsOnCart,totalPrice]

}
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
exports.addOrderItems = asyncHandler(async (req, res, next) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        name,number,
    } = req.body
    const [OrderItems,totalPrice]=await verifyProductsAndGetTotaLPrice(orderItems)


    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    } else {

            try {
                const result =await stripe.paymentIntents.create(
                    {
                        amount: parseInt(totalPrice),
                        currency: "gbp",
                        receipt_email: req.user.email,
                        description: `purchase of Wisecart`,
                    },

                );
                const order = new Order({
                    orderItems:OrderItems,
                    user: req.user._id,
                    shippingAddress,
                    paymentMethod,
                    itemsPrice,
                    taxPrice,
                    shippingPrice:1.99,
                    totalPrice
                })

                const createdOrder = await order.save()

                res.status(201).json({
                    createdOrder,
                    token: result.client_secret
                })
            } catch (e) {
                console.log(e)
                return next(new ErrorResponse('Payment Failed', 400));

            }
        }

})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
exports.getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
exports.updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address,
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
exports.updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
exports.getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({user: req.user._id})
    res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
exports.getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
})

