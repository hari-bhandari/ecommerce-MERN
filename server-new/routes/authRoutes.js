import express from 'express'
const router = express.Router()
import {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} from '../controllers/authController.js'
import {protect} from "../middleware/auth.js";
import passport from "passport";

router.post('/register', register);
router.post('/login', login);
//login with google
///////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
    '/google/callback',
    passport.authenticate('google', {failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
    }
)
///////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

export default router
