const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Category Schema
const CategorySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  id: {
    type: String,
    required:true,
    unique: true
  },
  image: {
    type:String,
    default:'http://res.cloudinary.com/wisecart/image/upload/v1616718691/kuy26lytx5k0lkvfkgrt.svg',
    required:true
  },
  description: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },

});

module.exports = Mongoose.model('Category', CategorySchema);
