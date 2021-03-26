const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./users');
const addressRoutes = require('./address');
const newsletterRoutes = require('./newsletter');
const productRoutes = require('./product');
const categoryRoutes = require('./category');
const contactRoutes = require('./contact');
const merchantRoutes = require('./merchant');
const cartRoutes = require('./cart');
const orderRoutes = require('./order');
const uploadRoutes=require('./uploadRoutes')
const {multerUploads}=require('../../config/dURIFormatter')
// auth routes
router.use('/auth', authRoutes);

// user routes
router.use('/users', userRoutes);

// address routes
router.use('/address', addressRoutes);

// newsletter routes
router.use('/newsletter', newsletterRoutes);

// product routes
router.use('/products', productRoutes);

// category routes
router.use('/category', categoryRoutes);

// contact routes
router.use('/contact', contactRoutes);

// merchant routes
router.use('/merchant', merchantRoutes);

// cart routes
router.use('/cart', cartRoutes);

// order routes
router.use('/order', orderRoutes);
//image uploading routes
router.use('/upload',multerUploads, uploadRoutes);


module.exports = router;
