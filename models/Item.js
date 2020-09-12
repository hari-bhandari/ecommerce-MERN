const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ItemSchema=new Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true,
    },
    description:{
        type:String,
        required:true

    },
    images:{
        type:Array,
        default:[]
    },
    availableQuantity:{
        type:Number,
        required:true
    },
    postage:{
        type:Boolean,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }






})
module.exports=mongoose.model('log',ItemSchema)