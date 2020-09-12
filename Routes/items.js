const express=require('express');
const router=express.Router();
const {getItem,addItem,updateItem}=require('../controllers/items');

const {protect,authorize}=require('../middlewares/auth')
router.route('/').post(protect,authorize('user','admin'),addItem);
router.route('/:id').put(protect,authorize('user','admin'),updateItem)
module.exports=router