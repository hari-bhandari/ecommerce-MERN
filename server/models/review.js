const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a title for the review'],
        maxlength: 100
    },
    comment: {
        type: String,
        required: [true, 'Please add some comment']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Please add a rating between 1 and 10']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

// Prevent user from submitting more than one review per bootcamp
// ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

// Static method to get avg rating and save
ReviewSchema.statics.getAverageRating = async function(product) {
    const obj = await this.aggregate([
        {
            $match: { product: product }
        },
        {
            $group: {
                _id: '$product',
                rating: { $avg: '$rating' }
            }
        }
    ]);

    try {
        await this.model('Product').findByIdAndUpdate(product, {
            rating: obj[0].rating,
            $inc : {numReviews : 1}
        });
    } catch (err) {
        console.error(err);
    }
};

// Call getAverageCost after save
ReviewSchema.post('save', async function() {
    await this.constructor.getAverageRating(this.product);
});

// Call getAverageCost before remove
ReviewSchema.post('remove', async function() {
    await this.constructor.getAverageRating(this.product);
});

module.exports = mongoose.model('Review', ReviewSchema);
