const express = require('express');
const router = express.Router();
const advancedResults=require('../../middleware/advancedResults')

// Bring in Models & Helpers
const Category = require('../../models/category');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
const asyncHandler = require("../../middleware/async");
// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private

router.post('/:id', auth, role.checkRole(role.ROLES.Admin), asyncHandler(async (req, res) => {
    const {name,id} = req.body
    const category = await Category.findById(req.params.id)
    if (category) {
        category.subCategory.push({
            name,id
        })

        await category.save()
        res.status(201).json({message: 'Added subCategory with a name of '+name})
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))


module.exports = router;
