import express from 'express'
const router = express.Router()
import {
  getProducts,
  createProduct,
  createProductReview,
  getTopProducts,getProductById
} from '../controllers/productController.js'
import {advancedResults} from "../middleware/advancedResult.js";
import Product from "../models/productModel.js";
import { protect } from '../middleware/auth.js'

router.route('/').get(advancedResults(Product),getProducts).post(protect, createProduct)
router.route('/single/:id').get(getProductById)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

export default router
