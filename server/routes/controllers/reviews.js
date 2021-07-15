const asyncHandler = require('../../middleware/async')
const Product = require('../../models/product')
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

const getProductReviewsById = asyncHandler(async (req, res) => {
    const product = await Product.findOne({id: req.params.id}).populate({
        path:'Category',
        select:'name id'
    })
    if (product) {
        sendRes(res,200,product)
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
        sendRes(res,201,createdProduct)
})


module.exports = {
    getProducts, getProductById,
    deleteProduct,
    createProduct
}
