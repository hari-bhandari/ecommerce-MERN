const Item=require('../models/Item')
const asyncHandler=require('../middlewares/async')
const ErrorResponse=require('../utils/errorResponse')
const path=require('path')

//@desc Create new  bootcamp
//@route POST /api/v1/bootcamp:id
//@access private

exports.addItem=  asyncHandler(async (req,res,next)=>{
    //add user to req.body
    req.body.user=req.user.id;
    const item=await Item.create(req.body)
    res.status(201).json({
        success:true,
        data:item
    })
});
//@desc Get single  item
//@route GET /api/v1/item:id
//@access Public
exports.getItem=asyncHandler(async (req,res,next)=>{
    const bootcamp=await Item.findById(req.params.id)
    if(!bootcamp){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404))
    }
    res.status(200).json({
        success:true,
        data:bootcamp
    })
})