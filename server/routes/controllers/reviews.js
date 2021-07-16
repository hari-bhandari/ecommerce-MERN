const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async')
const Review = require('../../models/review');
const Product = require('../../models/product');

// @desc      Get reviews for a product
// @route     GET /api/v1/reviews
// @route     GET /api/v1/products/:id/reviews
// @access    Public
exports.getReviews = asyncHandler(async (req, res, next) => {
    if (req.params.id) {
        const reviews = await Review.find({ product: req.params.id });

        return res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } else {
        res.status(200).json(res.advancedResults);
    }
});

// @desc      Get single review
// @route     GET /api/v1/reviews/:id
// @access    Public
exports.getReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id).populate({
        path: 'product',
        select: 'name description'
    });

    if (!review) {
        return next(
            new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        data: review
    });
});

// @desc      Add review
// @route     POST /api/v1/products/id/reviews
// @access    Private
exports.addReview = asyncHandler(async (req, res, next) => {
    req.body.product = req.params.id;
    req.body.user = req.user.id;

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(
            new ErrorResponse(
                `No product with the id of ${req.params.id}`,
                404
            )
        );
    }

    const review = await Review.create(req.body);

    res.status(201).json({
        success: true,
        data: review
    });
});

// @desc      Update review
// @route     PUT /api/v1/reviews/:id
// @access    Private
exports.updateReview = asyncHandler(async (req, res, next) => {
    let review = await Review.findById(req.params.id);

    if (!review) {
        return next(
            new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
        );
    }

    // Make sure review belongs to user or user is admin
    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(new ErrorResponse(`Not authorized to update review`, 401));
    }
    const {
        title,comment,rating} = req.body


    if (review) {
        review.title=title
        review.comment=comment
        review.rating=rating

        const updatedReview = await review.save()
        res.status(200).json({
            success: true,
            data: updatedReview
        });
    } else {
        res.status(404)
        throw new Error('Review not found')
    }
});

// @desc      Delete review
// @route     DELETE /api/v1/reviews/:id
// @access    Private
exports.deleteReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    if (!review) {
        return next(
            new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
        );
    }

    // Make sure review belongs to user or user is admin
    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(new ErrorResponse(`Not authorized to update review`, 401));
    }

    await review.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});
