const crypto = require('crypto');
const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middleware/async');
const User = require('../../models/user');
const mailchimp = require('../../services/mailchimp');
const mailgun = require("../../config/sendgrid");
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const axios = require('axios');
const sendGrid = require('../../services/sendGrid');

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

    return res.status(200).json({
        success: true,
        data: {},
    });
});

// @desc      Forgot password
// @route     POST /api/v1/auth/forgotpassword
// @access    Private
exports.forgotPassword = asyncHandler(async (req, res, next) => {
        const user = await User.findOne({email: req.body.email});

        if (!user) {
            return next(new ErrorResponse('There is not user with that email', 404));
        }

        // Get reset token
        const resetToken = user.getResetPasswordToken();

        await user.save({validateBeforeSave: false});

        await mailgun.sendEmail(
            req.body.email,
            'reset',
            req.headers.host,
            resetToken
        );
    }
);

// @desc      Update user details
// @route     PUT /api/v1/auth/updatedetails
// @access    Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
    const fieldsToUpdate = {
        name: req.body.name,
        email: req.body.email,
    };

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true,
        runValidators: true,
    });

    return res.status(200).json({
        success: true,
        data: user,
    });
});

// @desc      Update password
// @route     PUT /api/v1/auth/updatepassword
// @access    Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    if (!(await user.matchPassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// @desc      Reset password
// @route     PUT /api/v1/auth/resetpassword/:resettoken
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
    // Get hashed token
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resettoken)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()},
    });

    if (!user) {
        return next(new ErrorResponse('Invalid token', 400));
    }

    // Set new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
    const {firstName, lastName, email, password, isSubscribed} = req.body;

    if (!email) {
        return res.status(400).json({error: 'You must enter an email address.'});
    }

    if (!firstName || !lastName) {
        return res.status(400).json({error: 'You must enter your full name.'});
    }

    if (!password) {
        return res.status(400).json({error: 'You must enter a password.'});
    }
    const userExists = await User.findOne({email})
    if (userExists) {
        return next(new ErrorResponse(`An user already exists with an email of ${email}`, 400));
    }
    let subscribed = false;
    if (isSubscribed) {
        const result = await mailchimp.subscribeToNewsletter(email);

        if (result.status === 'subscribed') {
            subscribed = true;
        }
    }
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });
    await sendGrid.sendEmail(email, 'signup');


    sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;

    // Validate email & password
    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    const user = await User.findOne({email}).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
});
exports.google = asyncHandler(async (req, res, next) => {
    if (!req.body.token) {
        return next(new ErrorResponse('Token not provided', 401));
    }
    const {payload} = await client.verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_CLIENT_ID
    })

    const userExists = await User.findOne({email: payload.email})
    if (userExists) {
        sendTokenResponse(userExists, 200, res)
    }
    const user = await User.create({
        provider: 'google',
        firstName: payload.given_name,
        lastName: payload.family_name,
        email: payload.email,
        password: null,
        avatar: payload.picture,
    });
    if(user.email){
        await sendGrid.sendEmail(email, 'signup');
    }
    sendTokenResponse(user, 200, res)
});
exports.facebook = asyncHandler(async (req, res, next) => {
    if (!req.body.token) {
        return next(new ErrorResponse('Token not provided', 401));
    }
    const {data}=await axios.get(`https://graph.facebook.com/me?fields=name,picture,id,email&access_token=${req.body.token}`)

    const userExists = await User.findOne({facebookId: data.id})
    if (userExists) {
        sendTokenResponse(userExists, 200, res)
    }
    const emailExists=await User.findOne({email: data.email?data.email:''})
    if(emailExists){
        sendTokenResponse(emailExists, 200, res)
    }
    const [firstName,lastName]=data.name.split(' ')
    const user = await User.create({
        provider: 'facebook',
        firstName: firstName,
        lastName: lastName?lastName:'',
        email: data.email,
        password: null,
        avatar: data.picture.data.url,
    });
    if(user.email){
        await sendGrid.sendEmail(email, 'signup');

    }
    sendTokenResponse(user, 200, res)
});
// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIR * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    return res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};
