const express=require('express');
const router=express.Router();
const Item=require('../models/Item')
const {getItem,getItems,addItem,updateItem,deleteItem,itemPhotoUpload,addToCart,removeFromCart,cartInfo}=require('../controllers/items');
const advancedResults=require('../middlewares/advancedResult')

const {protect,authorize}=require('../middlewares/auth')
router.route('/').post(protect,authorize('user','admin'),addItem).get(advancedResults(Item),getItems);
router.route('/:id').put(protect,authorize('user','admin'),updateItem).delete(protect,authorize('user','admin'),deleteItem).get(getItem)
router.route('/:id/photo').put(protect,authorize('user','admin'),itemPhotoUpload);
router.route('/:id/addToCart').post(protect,authorize('user','admin'),addToCart);
router.route('/:id/removeFromCart').post(protect,authorize('user','admin'),removeFromCart);
router.route('/cart').get(protect,authorize('user','admin'),cartInfo);
module.exports=router