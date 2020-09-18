const mongoose=require('mongoose')
//import the slug package
const slug = require('mongoose-slug-generator');
//Initialize
mongoose.plugin(slug);
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
        type:String
    },
    postage:{
        type:Boolean,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    category:{
        type:String,
        enum:['apple','watch','samsung','huawei','TV','others'],
        default:'others'
    },
    _id: { type: String, slug: "productName" ,unique:true}






})
module.exports=mongoose.model('item',ItemSchema)