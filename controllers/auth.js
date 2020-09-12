const User=require('../models/User');
const asyncHandler=require('../middleware/async');
const ErrorResponse=require('../utils/errorResponse');
const crypto=require('crypto')
//@desc register a user
//@route POST /api/v1/auth/register
//@access Public
exports.register=asyncHandler(async (req,res,next)=>{
    const {name,email,password,role}=req.body;

    //Create user
    const user=await User.create({
        name,
        email,
        password,
        role
    });
    //Create web token and send it
    sendTokenResponse(user,200,res)

})
//get token from model,create cookie and send
// response
const sendTokenResponse=(user,statusCode,res)=>{
    //Create web token
    const token=user.getSignedJwtToken();
    const options={
        expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*24*60*60*1000),
        httpOnly:true,
    }
    if(process.env.NODE_ENV==='production'){
        options.secure=true
    }
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        token
    })
}
