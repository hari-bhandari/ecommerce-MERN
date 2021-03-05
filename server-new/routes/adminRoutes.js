import express from 'express'
const router = express.Router()
import {
    updateOrderToDelivered,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import {
    createProduct, deleteProduct,
    getProducts, updateProduct
} from "../controllers/productController";
import {deleteUser, getUserById, updateUser} from "../controllers/userController";

router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)
router.route('/product').get(getProducts).post(protect, admin, createProduct)
router.route('product/:id').delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
router
    .route('user/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router
