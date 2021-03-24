const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');
const {login,register,forgotPassword} =require('../../controllers/auth')
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

router.post('/reset/:token', (req, res) => {
  const password = req.body.password;

  if (!password) {
    return res.status(400).json({ error: 'You must enter a password.' });
  }

  User.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    },
    (err, resetUser) => {
      if (!resetUser) {
        return res.status(400).json({
          error:
            'Your token has expired. Please attempt to reset your password again.'
        });
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            return res.status(400).json({
              error:
                'Your request could not be processed as entered. Please try again.'
            });
          }
          req.body.password = hash;

          resetUser.password = req.body.password;
          resetUser.resetPasswordToken = undefined;
          resetUser.resetPasswordExpires = undefined;

          resetUser.save(async err => {
            if (err) {
              return res.status(400).json({
                error:
                  'Your request could not be processed as entered. Please try again.'
              });
            }

            await mailgun.sendEmail(resetUser.email, 'reset-confirmation');

            res.status(200).json({
              success: true,
              message:
                'Password changed successfully. Please login with your new password.'
            });
          });
        });
      });
    }
  );
});

router.post('/reset', auth, (req, res) => {
  const email = req.user.email;
  const password = req.body.password;

  if (!password) {
    return res.status(400).json({ error: 'You must enter a password.' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err || existingUser === null) {
      return res.status(400).json({
        error:
          'Your request could not be processed as entered. Please try again.'
      });
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return res.status(400).json({
            error:
              'Your request could not be processed as entered. Please try again.'
          });
        }
        req.body.password = hash;

        existingUser.password = req.body.password;

        existingUser.save(async err => {
          if (err) {
            return res.status(400).json({
              error:
                'Your request could not be processed as entered. Please try again.'
            });
          }

          await mailgun.sendEmail(existingUser.email, 'reset-confirmation');

          res.status(200).json({
            success: true,
            message:
              'Password changed successfully. Please login with your new password.'
          });
        });
      });
    });
  });
});

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
