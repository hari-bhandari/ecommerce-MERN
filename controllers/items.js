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
//@desc update a item
//@route PUT /api/item/:id
//@access private
exports.updateItem= asyncHandler(async (req,res,next)=>{
    let item=await Item.findById(req.params.id);
    if(!item){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404));
    }
    //make sure user is bootcamp user
    if(item.user.toString()!==req.user.id&&req.user.role!=='admin'){
        return next(new ErrorResponse(`User ${req.params.id} is not authorized to update this bootcamp`,401));
    }
    item=await Item.findOneAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        data:item
    });

})