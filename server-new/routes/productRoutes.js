import express from 'express'
const router = express.Router()
import {
  getProducts,
  createProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import {advancedResults} from "../middleware/advancedResult.js";
import Product from "../models/productModel.js";
import { protect } from '../middleware/auth.js'

router.route('/').get(advancedResults(Product),getProducts).post(protect, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

export default router
