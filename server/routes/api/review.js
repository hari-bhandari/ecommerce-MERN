const express = require('express');
const {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview,getMyReviews
} = require('../controllers/reviews');


const router = express.Router({ mergeParams: true });

const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');

router
    .route('/:id/reviews/')
    .get(
        getReviews
    )
    .post(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Customer), addReview);

router.route('/myReviews').get(auth,getMyReviews)

router
    .route('/:id/reviews/:id')
    .get(getReview)
    .put(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Customer), updateReview)
    .delete(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Customer), deleteReview);

module.exports = router;
