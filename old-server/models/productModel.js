import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

const reviewSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        rating: {type: Number, required: true},
        comment: {type: String, required: true},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },

    },
    {
        timestamps: true,
    }
)
mongoose.plugin(slug)
const productSchema = mongoose.Schema(
    {
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

        reviews: [reviewSchema],
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
            default: 0,
        },
        sex:{
            type:String,
            enum:['male','female'],
            required:false
        },
        id:{
          type:String,
          required:true,
          unique:[true,'An product already exists with that ID']
        },
        size:{
            type:Array,
            required:false
        }
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product
