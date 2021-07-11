const express =require('express')
const router = express.Router()
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} =require('../controllers/order.js')
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');
router.route('/').post(auth, addOrderItems).get(auth, role.checkRole('admin'), getOrders)
router.route('/myorders').get(auth, getMyOrders)
router.route('/:id').get(auth, getOrderById)
router.route('/:id/pay').put(auth, updateOrderToPaid)
router.route('/:id/deliver').put(auth, role.checkRole('admin'), updateOrderToDelivered)

module.exports=router