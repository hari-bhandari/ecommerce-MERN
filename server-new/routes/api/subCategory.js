const express = require('express');
const router = express.Router();
const SubCategory=require('../../models/subCategory')
// Bring in Models & Helpers
const Category = require('../../models/category');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
const asyncHandler = require("../../middleware/async");
// @desc    Create new subcategory
// @route   POST /api/products/:id/reviews
// @access  Private

router.post('/:id', auth, role.checkRole(role.ROLES.Admin), asyncHandler(async (req, res) => {
    const {name,id} = req.body
    const category = await Category.findById(req.params.id)
    if (category) {
        const subCategory=await SubCategory.create({name,id,category:category._id})
        res.status(201).json({data:subCategory})
    } else {
        res.status(404)
        throw new Error('Category  not found with an ID of ' +req.params.id)
    }
}))
router.get('/:id',asyncHandler(async (req, res) => {
    const subCategories=await SubCategory.find({category:req.params.id})
    res.status(201).json({data:subCategories})
}))


module.exports = router;
