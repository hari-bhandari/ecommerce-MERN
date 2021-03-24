const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');
const {login,register,forgotPassword,resetPassword,updateDetails} =require('../../controllers/auth')
const auth = require('../../middleware/auth');

// Bring in Models & Helpers
const User = require('../../models/user');
const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
const keys = require('../../config/keys');

const { secret, tokenLife } = keys.jwt;

router.post('/login', login)

router.post('/register',register)

router.post('/forgotpassword', forgotPassword)

router.post('/resetpassword/:resettoken', resetPassword)
router.post('/reset', auth, updateDetails)

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
        window.location.href = '/auth/success';
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

module.exports = router;
