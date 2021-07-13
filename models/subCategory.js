const Mongoose = require('mongoose');
const { Schema } = Mongoose;
// Brand Schema
const SubCategorySchema = new Schema({
  name: {
    type: String,
    required:true
  },
  id: {
    type:  Schema.Types.String,
    unique:true,
    required:true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required:true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('SubCategory', SubCategorySchema);
