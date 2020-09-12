const express=require('express');
const router=express.Router();
const {getItem,addItem}=require('../controllers/items');

const {protect,authorize}=require('../middlewares/auth')
router.route('/').post(protect,authorize('seller','admin'),addItem);
module.exports=router