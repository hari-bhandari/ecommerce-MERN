const crypto = require('crypto');
const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const User = require('../../models/user');
const mailchimp = require('../../services/mailchimp');
const mailgun = require("../../config/mailgun");

// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = (await User.findById(req.user.id)) || null;

    return res.status(200).json({
        success: true,
        data: user,
    });
});

// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'node', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    return res.status(200).json({
        success: true,
        data: {},
    });
});
