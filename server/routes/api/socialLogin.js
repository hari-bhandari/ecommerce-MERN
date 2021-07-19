const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');


const keys = require('../../config/keys');

const { secret, tokenLife } = keys.jwt;

router.get(
    '/google',
    passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email'],
        accessType: 'offline',
        approvalPrompt: 'force'
    }),(req, res) => {
        console.log({user:req.user})
    }

);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',
        session: false,
        scope: ['profile', 'email'],
        accessType: 'offline',
        approvalPrompt: 'force'
    }),
    async (req, res) => {
        const token=await jwt.sign({ id:req.user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        res.send({...req.user,token})
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
