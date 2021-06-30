const Order = require('../../models/order')
const asyncHandler = require('../../middleware/async');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const ErrorResponse = require('../../utils/errorResponse');

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
        totalPrice,
        name,number,
    } = req.body
    const OrderItems=orderItems.map(product=>({...product,product:product._id}))


    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    } else {
            try {
                const result =await stripe.paymentIntents.create(
                    {
                        amount: totalPrice,
                        currency: "gbp",
                        receipt_email: req.user.email,
                        description: `purchase of Wisecart`,

                    },

                );
                // const paymentIntent = await stripe.charges.create({
                //     amount: totalPrice,
                //     payment_method: stripeToken,
                //     customer:req.user._id,
                //     payment_method_types: ['card'],
                //     currency: "gbp",
                //     description:"212"
                // });

                const order = new Order({
                    OrderItems,
                    user: req.user._id,
                    shippingAddress,
                    paymentMethod,
                    itemsPrice,
                    taxPrice,
                    shippingPrice,
                    totalPrice,
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
            email_address: req.body.payer.email_address,
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

