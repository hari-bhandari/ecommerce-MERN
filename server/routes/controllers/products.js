const asyncHandler = require('../../middleware/async')
const Product = require('../../models/product')
const Order = require('../../models/order')
const User =require('../../models/user')
const Review =require('../../models/review')
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults)
})
//helper function to send data
const sendRes = (res, status, data) => {
    res.status(status).json(
        {
            success: true,
            data: data
        }
    )
}
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findOne({id: req.params.id}).populate('reviews')
    if (product) {
        sendRes(res, 200, product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({message: 'Product removed'})
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})
// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        description,
        images,
        thumbImage,
        subCategory,
        category,
        countInStock,
    } = req.body
    const product = new Product({
        name: name,
        price: price,
        user: req.user._id,
        images: images,
        thumbImage: thumbImage,
        subCategory: subCategory,
        category: category,
        countInStock: countInStock,
        numReviews: 0,
        description: description,
    })


    const createdProduct = await product.save()
    sendRes(res, 201, createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        description,
        image,
        subCategory,
        category,
        images,
        thumbImage,
        countInStock,
    } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.subCategory = subCategory
        product.category = category
        product.countInStock = countInStock
        product.images=images
        product.thumbImage=thumbImage

        const updatedProduct = await product.save()
        sendRes(res, 201, updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})


// @desc    delete a image
// @route   GET /api/products/images/:id/:url
// @access  Private
const deleteAImage = asyncHandler(async (req, res) => {
    let product = await Product.findById(req.params.id)
    const {url} = req.body
    if (product) {
        if (product.images.indexOf(url) !== -1) {
            const newImages = product.images.filter(link => link !== url)
            await Product.findByIdAndUpdate(req.params.id, {images: newImages}, {
                new: true,
                runValidators: true
            });
            res.status(201).json({success: true})

        } else {
            res.status(404)
            throw new Error('Image link already removed or not found')
        }
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Get top rated products
// @route   GET /api/v1/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({rating: -1}).limit(7)
    sendRes(res, 200, products)
})

// @desc    Get similar products
// @route   GET /api/v1/products/similar/:id
// @access  Public
const getSimilarProducts = asyncHandler(async (req, res) => {
    Product.findRandom({}, {}, {limit: 6}, function (err, results) {
        if (!err) {
            sendRes(res, 200, results)
        }
        if (err) {
            throw new Error("Something doesn't feel right")

        }
    });
})
// @desc    Get Autocomplete results
// @route   GET /api/v1/products/autocomplete/?text=text&category=category
// @access  Public
const getAutocompleteResults = asyncHandler(async (req, res) => {
    const regexToText = new RegExp(req.query.text, 'i')
    const category = req.query.category ? {category: req.query.category} : {}
    const products = await Product.find({name: regexToText, ...category}, ['name', 'id', 'thumbImage']).sort({rating: -1}).limit(4)
    if (products) {
        sendRes(res, 200, products)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

})
//search results
const search = asyncHandler(async (req, res) => {
    const regexToText = new RegExp(req.query.query, 'i')
    const category = req.query.category ? {category: req.query.category} : {}
    const products = await Product.find({
        $or: [
            {name: regexToText},
            {description: regexToText}
        ], ...category
    })
    // const products = await Product.find({name:regexToText,...category})
    if (products) {
        sendRes(res, 200, products)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

})

// @desc    Get dashboard data
// @route   GET /api/v1/products/dashboard
// @access  Public
const getDashboardData = asyncHandler(async (req, res) => {
    const dateOffset = (24 * 60 * 60 * 1000) * 30; //30 days
    const date = new Date()
    date.setTime(date.getTime() - dateOffset);
    const last30DaysDate = date.toISOString()
    const last30DaysOrders = await Order.find({
        "created": {
            "$gte": last30DaysDate
        }
    })
    const totalSales = last30DaysOrders.reduce((result, {totalPrice}) => result + totalPrice, 0)
    const users = await User.find({
        "created": {
            "$gte": last30DaysDate
        }
    })
    const reviews=await Review.find({
        "createdAt": {
            "$gte": last30DaysDate
        }
    })
    const products=await Product.find({
        "created": {
            "$gte": last30DaysDate
        }
    })
    res.json({
        totalSales:Math.round(totalSales),
        totalUsersAdded: users.length,
        totalProductsAdded: products.length,
        totalReviewsAdded: reviews.length

    })


})
module.exports = {
    getProducts, getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    getTopProducts, deleteAImage, getSimilarProducts, getAutocompleteResults, search, getDashboardData
}
