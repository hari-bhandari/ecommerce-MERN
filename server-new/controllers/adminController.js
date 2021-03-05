
// @desc   get all users
// @route   get /api/admin/login
// @access  Public

// @desc   get all products
// @route   get /api/admin/products
// @access  Public

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
import asyncHandler from "express-async-handler";
import Product from "../models/productModel";

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)adde

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
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
        image,
        subCategory,
        category,
        countInStock,
    } = req.body
    const product = new Product({
        name: name,
        price: price,
        user: req.user._id,
        image: image,
        subCategory:subCategory ,
        category: category,
        countInStock: countInStock,
        numReviews: 0,
        description: description,
    })


    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
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

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})