const express = require('express');
const {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview
} = require('../controllers/reviews');


const router = express.Router({ mergeParams: true });

const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');

router
    .route('/')
    .get(
        getReviews
    )
    .post(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Customer), addReview);

router
    .route('/:id')
    .get(getReview)
    .put(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Customer), updateReview)
    .delete(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Customer), deleteReview);

module.exports = router;
