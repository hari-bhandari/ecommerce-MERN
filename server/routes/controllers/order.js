const Order = require('../../models/order')
const mongoose = require('mongoose')
const Product = require('../../models/product')
const asyncHandler = require('../../middleware/async');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const ErrorResponse = require('../../utils/errorResponse');
const Category = require("../../models/category");
const verifyProductsAndGetTotaLPrice = async (products) => {
    const ProductIDs = []
    const ProductIdToCartQuantity = {}
    products.forEach(product => {
        ProductIDs.push(mongoose.Types.ObjectId(product._id))
        ProductIdToCartQuantity[product._id] = product.cartQuantity
    })
    const productsOnCart = await Product.find({_id: ProductIDs}, ['name', 'price', 'thumbImage', 'id']).lean()
    const getTotalPriceAndList = (data) => {
        const clonedData = [...data]
        let totalPrice = 1.99
        const OrderItems = clonedData.map(data => {
            totalPrice += data.price * ProductIdToCartQuantity[data._id.toString()]
            return {...data, cartQuantity: ProductIdToCartQuantity[data._id.toString()], product: data._id}
        })

        return [OrderItems, totalPrice]
    }
    const [newProductsOnCart, totalPrice] = getTotalPriceAndList(productsOnCart)
    return [newProductsOnCart, totalPrice]

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
        name, number,
    } = req.body
    const [OrderItems, totalPrice] = await verifyProductsAndGetTotaLPrice(orderItems)


    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')

    } else {

        try {

            const order = new Order({
                orderItems: OrderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice: 1.99,
                totalPrice
            })

            const createdOrder = await order.save()

            res.status(201).json({
                createdOrder
            })
        } catch (e) {
            console.log(e)
            return next(new ErrorResponse('Payment Failed', 400));

        }
    }

})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
exports.updateOrderToPaid = asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id)
        if (order.isPaid) {
            res.send(
                {
                    success: false,
                    error: 'Order has been already paid. If you didn\'t make this payment,Please contact us'
                }
            )

        }
        if (order) {
            let intent
            if (req.body.payment_method_id) {
                intent = await stripe.paymentIntents.create(
                    {
                        payment_method: req.body.payment_method_id,
                        amount: Math.round(order.totalPrice * 100),
                        currency: "gbp",
                        description: `purchase of ${order.orderItems.length} products using Wisecart`,
                        confirmation_method: 'manual',
                        confirm: true
                    },
                );
            } else if (req.body.payment_intent_id) {
                intent = await stripe.paymentIntents.confirm(
                    req.body.payment_intent_id
                );
            }
            if (
                intent.status === 'requires_action' &&
                intent.next_action.type === 'use_stripe_sdk'
            ) {
                res.send({
                    requires_action: true,
                    payment_intent_client_secret: intent.client_secret
                });
            } else if (intent.status === 'succeeded') {
                // The payment didn’t need any additional actions and completed!
                // Handle post-payment fulfillment
                const products = order.orderItems

                for (const product of products) {
                    const foundProduct = await Product.findById(product._id)
                    const totalQuantity = foundProduct.countInStock
                    foundProduct.countInStock = totalQuantity - product.cartQuantity
                    foundProduct.save(function (err) {
                        if (err) return res.status(406).json({
                            error: `${foundProduct.name} has only ${totalQuantity} pieces left`
                        })
                    });

                    order.isPaid = true
                    order.paidAt = Date.now()
                    order.paymentResult = {
                        id: req.body.id,
                        status: req.body.status,
                        update_time: req.body.update_time,
                        email_address: req.body.email_address,
                    }
                    await order.save()

                }
                res.send({success: true, order: order});

            } else {
                // Invalid status
                res.send({
                    error: 'Invalid PaymentIntent status'
                })
            }


        } else {
            res.status(404)
            throw new Error('Order not found')
        }
    }
)

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
exports.updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.status = 'delivered'
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

// @desc    Get my order using id
// @route   GET /api/orders/:id
// @access  Private
exports.getMyOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) {
        res.status(401).json("The order id doesn't exist")
    }
    if (order.user.toString() === req.user._id.toString()) {
        res.status(200).json(order)
    }
    res.status(401).json("You're not authorised to access this page")

})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
exports.getOrders = asyncHandler(async (req, res) => {
    const limit = parseInt(req.query.limit)
    const categoryDoc = await Order.aggregate([
        {
            $match: {paymentResult: {$exists: true}}
        },
        {$sort: {created: -1}},
        {
            "$lookup": {
                "from": "users", // collection name
                "localField": "user",
                "foreignField": "_id",
                "as": "user"
            }
        },
        {
            "$limit": limit ? limit : 10000
        }

    ])
    res.json(categoryDoc)

})
// @desc    Get sales for last seven days
// @route   GET /api/orders/salesForLastSevenDays
// @access  Private/admin
exports.getSalesForLastSevenDays = asyncHandler(async (req, res) => {
    const dateOffset = (24 * 60 * 60 * 1000) * 7; //7 days
    const date = new Date()
    date.setTime(date.getTime() - dateOffset);
    const last7DaysDate = date.toISOString()
    const orders = await Order.find({
        "created": {
            "$gte": last7DaysDate
        }
    })
    const sales = {}
    orders.forEach(order => {
        const date = new Date(order.created)
        const modifiedDate = `${date.getDate()}/${date.getMonth() + 1}`
        if (sales[modifiedDate]) {
            sales[modifiedDate] = [...sales[modifiedDate], order.totalPrice]
        } else {
            sales[modifiedDate] = [order.totalPrice]

        }
    })
    res.send(sales)

})


