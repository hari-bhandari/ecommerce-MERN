const Item=require('../models/Item')
const User=require('../models/User')
const asyncHandler=require('../middlewares/async')
const ErrorResponse=require('../utils/errorResponse')
const path=require('path')

//@desc Create new  item
//@route POST /api/v1/item:id
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

//@desc update a item
//@route PUT /api/item/:id
//@access private
exports.updateItem= asyncHandler(async (req,res,next)=>{
    let item=await Item.findById(req.params.id);
    if(!item){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404));
    }
    //make sure user is item user
    if(item.user.toString()!==req.user.id&&req.user.role!=='admin'){
        return next(new ErrorResponse(`User ${req.params.id} is not authorized to update this Item`,401));
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
//@desc delete new  item
//@route Delete /api/item:id
//@access private
exports.deleteItem=asyncHandler(async (req,res,next)=> {
    const item=await Item.findById(req.params.id);
    if(!item){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404))
    }

    if(item.user.toString()!==req.user.id&&req.user.role!=='admin'){
        return next(new ErrorResponse(`User ${req.params.id} is not authorized to delete this Item`,401));
    }
    item.remove();
    res.status(200).json({
        success:true,
        data: {}
    });
})
//@desc upload photo for item
//@route PUT /api/v1/item/:id/photo
//@access private
exports.itemPhotoUpload=asyncHandler(async (req,res,next)=> {
    const item=await Item.findById(req.params.id);
    if(!item){
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`,404))
    }
    //make sure user is Item user
    if(item.user.toString()!==req.user.id&&req.user.role!=='admin'){
        return next(new ErrorResponse(`User ${req.user.name} is not authorized to update this Item`,401));
    }
    if(!req.files){
        return next(new ErrorResponse(`Please upload a file`,400))
    }
    const file=req.files.file;
    if(!file.mimetype.startsWith('image')){
        return next(new ErrorResponse(`Please upload an image file`,400))
    }
    if(file.size>process.env.MAX_FILE_UPLOAD){
        return next(new ErrorResponse(`Please upload an image file less than ${process.env.MAX_FILE_UPLOAD}`,400))
    }

    //create custom file name
    file.name=`photo_${req.params.id}${path.parse(file.name).ext}`
    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err=>{
        if(err){
            console.error(err)
            return next(new ErrorResponse(`problem with file upload `,500))
        }
        await Item.findByIdAndUpdate(req.params.id,{images:file.name});
        res.status(200).json({
            success:true,
            data:file.name
        })
    })
})
//@desc Get all items
//@route GET /api/items
//@access Public
exports.getItems=asyncHandler(async  (req,res,next)=>{
    //advanced results from middleware
    res.status(200).json(res.advancedResults)
})


exports.addToCart=asyncHandler(async  (req,res,next)=>{
    let user = await User.findOne({_id: req.user._id});
    let duplicate = false
    const quantity = parseInt(req.query.quantity) || 1
    user.cart.forEach((item) => {
        if (item.id == req.params.id) {
            duplicate = true;
        }
    })
    if (duplicate) {
        user = await User.findOneAndUpdate(
            {_id: req.user._id, "cart.id": req.params.id},
            {$inc: {"cart.$.quantity": quantity}},
            {new: true}
        )
        res.status(200).json({
            success: true,
            data: user
        })

    } else {
        user=await User.findOneAndUpdate(
            {_id: req.user._id},
            {
                $push: {
                    cart: {
                        id: req.params.id,
                        quantity: quantity,
                        date: Date.now()
                    }
                }
            },
            {new: true})
        res.status(200).json({
            success: true,
            data: user
        })
    }

})
exports.addToCartByQuantity = asyncHandler(async (req, res, next) => {
    let user = await User.findOne({_id: req.user._id});
    let duplicate = false
    const quantity = parseInt(req.query.quantity) || 1
    user.cart.forEach((item) => {
        if (item.id == req.params.id) {
            duplicate = true;
        }
    })
    if (duplicate) {
        user = await User.findOneAndUpdate(
            {_id: req.user._id, "cart.id": req.params.id},
            {quantity},
            {new: true}
        )
        res.status(200).json({
            success: true,
            data: user
        })

    }
    else{
        res.status(200).json({
            success: false,
            data: 'Error'
        })
    }


})
exports.removeFromCart = asyncHandler(async (req, res, next) => {
    const user = await User.findOneAndUpdate({_id: req.user._id}, {"$pull": {"cart": {"id": req.params.id}}}, {new: true})
    let cart = user.cart;
    let array = cart.map(item => {
        return item.id
    })
    const item = await Item.find({'_id': {$in: array}}).populate('writer')


    res.status(200).json({
        success: true,
        data: {
            cartDetail: user.cart,
            item
        }
    })
    }
)


//@desc get cart information
//@route get /api/auth/cart
//@access Public
exports.cartInfo=asyncHandler(async (req,res,next)=>{
        const user= await User.findOne({ _id: req.user._id })
        let cart = user.cart;
        let array = cart.map(item => {
            return item.id
        })
        const cartDetail= await Item.find({ '_id': { $in: array } })
            .populate('user')


    res.status(200).json({
        success: true,
        data: cartDetail
    })


    }
)
exports.cartSize=asyncHandler(async (req,res,next)=>{
        const user= await User.findOne({ _id: req.user._id })
        let count=0
        user.cart.forEach(item=>{
            count+=item.quantity
        })
        res.status(200).json({
            success: true,
            data: {
                size:count

            }
        })


    }
)
//@desc Get single  item
//@route GET /api/v1/item:id
//@access Public
exports.getItem = asyncHandler(async (req, res, next) => {
    const item = await Item.findById(req.params.id)
    if (!item) {
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({
        success: true,
        data: item
    })
})