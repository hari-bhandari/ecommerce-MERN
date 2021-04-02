const express = require('express');
const router = express.Router();
const SubCategory=require('../../models/subCategory')
// Bring in Models & Helpers
const Category = require('../../models/category');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
const asyncHandler = require("../../middleware/async");
const advancedResults = require("../../middleware/advancedResults");
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
router.put('/:id', auth, role.checkRole(role.ROLES.Admin), asyncHandler(async (req, res) => {
    const {name,id} = req.body
    let subCategory = await SubCategory.findById(req.params.id)
    if (subCategory) {
        subCategory = await SubCategory.findByIdAndUpdate(req.params.id,{name,id}, {
            new: true,
            runValidators: true
        });
        res.status(201).json({data:subCategory})
    } else {
        res.status(404)
        throw new Error('SubCategory not found with an ID of ' +req.params.id)
    }
}))
router.delete('/:id', auth, role.checkRole(role.ROLES.Admin), asyncHandler(async (req, res) => {
    const subCategory=await SubCategory.findById(req.params.id)
    if(subCategory){
        await SubCategory.findByIdAndDelete(req.params.id)
        res.status(201).json({data:[]})

    }
    if(!subCategory){
        res.status(404)
        throw new Error('SubCategory not found with an ID of ' +req.params.id)
    }
}))
router.get('/:id',asyncHandler(async (req, res) => {
    const subCategories=await SubCategory.find({category:req.params.id})
    res.status(201).json({data:subCategories})
}))
router.get('/', advancedResults(SubCategory),(req, res) => {
    res.status(200).json(res.advancedResults)
});


module.exports = router;
