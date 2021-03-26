const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const User = require('../models/User');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');

router.use(auth);
router.use( role.checkRole(role.ROLES.Admin));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
