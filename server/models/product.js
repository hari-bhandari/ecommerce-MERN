const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose = require("mongoose");
const { Schema } = Mongoose;
const random = require('mongoose-simple-random');

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);
mongoose.set('runValidators', true); // global config to run validators on update

// Product Schema
const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  thumbImage: {
    type: String,
    required: true,
    default: 'defaultThumbImage.png'
  },
  images: {
    type: Array,
    required: true,
    default: []
  },
  subCategory: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    min:0,
    max:1000000,
    default: 0,
  },
  sex:{
    type:String,
    enum:['male','female'],
    required:false
  },
  id:{
    type: String,
    slug: 'name',
    unique: true
  },
  size:{
    type:Array,
    required:false
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },

},
    { toJSON: { virtuals: true } });
// Reverse populate with virtual
ProductSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false
});
ProductSchema.plugin(random)
module.exports = Mongoose.model('Product', ProductSchema);
