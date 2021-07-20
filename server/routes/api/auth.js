const express = require('express');
const router = express.Router();
const {login,register,forgotPassword,resetPassword,updateDetails,getMe,google,facebook} =require('../controllers/auth')
const {auth} = require('../../middleware/auth');

// Bring in Models & Helpers

router.post('/login', login)
router.post('/google', google)
router.post('/facebook', facebook)
router.get('/me',auth, getMe)

router.post('/register',register)

router.post('/forgotpassword', forgotPassword)

router.post('/resetpassword/:resettoken', resetPassword)
router.post('/reset', auth, updateDetails)

module.exports = router;
