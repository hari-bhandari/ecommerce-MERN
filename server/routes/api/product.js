const advancedResults=require('../../middleware/advancedResults')
const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Product = require('../../models/product');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
const reviewRouter =require('./review')
const {getProducts, getProductById, deleteProduct, createProduct, updateProduct,search, getTopProducts,getSimilarProducts ,deleteAImage,getAutocompleteResults}=require('../controllers/products')
router.use('/:id/reviews', reviewRouter);

router.route('/').get(advancedResults(Product),getProducts).post(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),createProduct);
//fetch single item
router.route('/single/:id').get(getProductById)
//get autocomplete results
router.route('/autocomplete/').get(getAutocompleteResults )
router.route('/search/').get(search )

//create review

//get top products
router.get('/top', getTopProducts)
router.get('/similar/:id', getSimilarProducts)

router.delete('/images/:id', deleteAImage)

router.put(
  '/:id',
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
  updateProduct
);

router.delete(
  '/:id',
  auth,
  role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),
 deleteProduct
);

module.exports = router;
