const advancedResults=require('../../middleware/advancedResults')
const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Product = require('../../models/product');
const Brand = require('../../models/subCategory');
const Category = require('../../models/category');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
const {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts,getSimilarProducts ,deleteAImage,getAutocompleteResults}=require('../controllers/products')

router.route('/').get(advancedResults(Product),getProducts).post(auth, role.checkRole(role.ROLES.Admin, role.ROLES.Merchant),createProduct);
//fetch single item
router.route('/single/:id').get(getProductById)
//get autocomplete results
router.route('/autocomplete/:text').get(getAutocompleteResults )

//create review
router.route('/:id/review').post(auth, createProductReview)

//get top products
router.get('/top', getTopProducts)
router.get('/similar/:id', getSimilarProducts)

router.delete('/images/:id', deleteAImage)

// fetch all products by category api
router.get('/list/category/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;

    const categoryDoc = await Category.findOne(
      { slug: slug },
      'products -_id'
    ).populate('products');

    if (!categoryDoc) {
      return res.status(404).json({
        message: 'No products found.'
      });
    }

    res.status(200).json({
      products: categoryDoc ? categoryDoc.products : categoryDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

// fetch all products by subcategory api
router.get('/list/subcategory/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;


    if (brand.length <= 0) {
      return res.status(404).json({
        message: `Cannot find brand with the slug: ${slug}.`
      });
    }

    const products = await Product.find({ brand: brand[0]._id }).populate(
      'brand',
      'name'
    );

    res.status(200).json({
      products
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

router.get('/list/select', auth, async (req, res) => {
  try {
    const products = await Product.find({}, 'name');

    res.status(200).json({
      products
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

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
