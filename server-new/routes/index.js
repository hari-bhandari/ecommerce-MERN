const router = require('express').Router();
const apiRoutes = require('./api');
const socialLogin=require('./api/socialLogin')
const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `/v1`;
//handling social login
router.use('/api/auth',socialLogin)
// handling other routes except for social login
router.use(api, apiRoutes);

router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
