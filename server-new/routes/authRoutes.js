import express from 'express'
import jwt from 'jsonwebtoken'
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


router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
//login with google and facebook
//login with google
///////////////////////////////////////////////////////////////////////////////////////////////////
router.get(
    '/google',
    passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email'],
        accessType: 'offline',
        approvalPrompt: 'force'
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',
        session: false
    }),
    (req, res) => {
        const payload = {
            id: req.user.id
        };

        jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
            const jwt = `Bearer ${token}`;

            const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('token', '${jwt}');
        // Redirect browser to root of application
        window.location.href = '/';
      </script>
    </html>       
    `;

            res.send(htmlWithEmbeddedJWT);
        });
    }
);

router.get(
    '/facebook',
    passport.authenticate('facebook', {
        session: false,
        scope: ['public_profile', 'email']
    })
);

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/',
        session: false
    }),
    (req, res) => {
        const payload = {
            id: req.user.id
        };

        jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
            const jwt = `Bearer ${token}`;

            const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('token', '${jwt}');
        // Redirect browser to root of application
        window.location.href = '/auth/success';
      </script>
    </html>       
    `;

            res.send(htmlWithEmbeddedJWT);
        });
    }
);

///////////////////////////////////////////////////////////////////////////////////////////////////
export default router
