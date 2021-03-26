import express from 'express'
const router = express.Router();
import Product from "../models/productModel.js";
import {
    updateOrderToDelivered,
} from '../controllers/orderController.js'
import { protect,authorize } from '../middleware/auth.js'
import {advancedResults} from "../middleware/advancedResult.js";
import {
    createProduct, deleteProduct,
    getProducts, updateProduct
} from "../controllers/productController.js";
import {getUsers,getUser,createUser,updateUser,deleteUser} from "../controllers/userController.js";
import User from "../models/userModel.js";

router.route('/:id/deliver').put(protect,authorize('admin'), updateOrderToDelivered)
router.route('/products').get(protect,authorize('admin'),advancedResults(Product),getProducts).post(protect,authorize('admin'), createProduct)
router.route('product/:id').delete(protect,authorize('admin'), deleteProduct).put(protect,authorize('admin'), updateProduct)
router.route('/').get(protect,authorize('admin'),advancedResults(User), getUsers).post(protect,authorize('admin'),createUser);
router.route('/:id').get(protect,authorize('admin'),getUser).put(protect,authorize('admin'),updateUser).delete(protect,authorize('admin'),deleteUser);
export default router