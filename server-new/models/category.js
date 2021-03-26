const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;
const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);
// Brand Schema
const SubCategorySchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  id: {
    type: String,
    required:true,
    unique: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

// Category Schema
const CategorySchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
  image: {
    type:String,
    default:'http://res.cloudinary.com/wisecart/image/upload/v1616718691/kuy26lytx5k0lkvfkgrt.svg'
  },
  description: {
    type: String,
    trim: true
  },
  subCategory:[SubCategorySchema],
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },

});

module.exports = Mongoose.model('Category', CategorySchema);
