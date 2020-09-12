const Item=require('../models/Item')
const asyncHandler=require('../middlewares/async')
const ErrorResponse=require('../utils/errorResponse')
const path=require('path')
//@desc Get single  item
//@route GET /api/v1/item:id
//@access Public
exports.getBootcamp=asyncHandler(async (req,res,next)=>{
    const bootcamp=await Item.findById(req.params.id)
    if(!bootcamp){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404))
    }
    res.status(200).json({
        success:true,
        data:bootcamp
    })
})