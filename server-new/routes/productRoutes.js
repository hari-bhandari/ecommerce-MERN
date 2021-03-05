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
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(advancedResults(Product),getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

export default router
