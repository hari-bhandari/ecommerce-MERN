const express=require('express');
const router=express.Router();
const Item=require('../models/Item')
const {getItem,getItems,addItem,updateItem,deleteItem,itemPhotoUpload}=require('../controllers/items');
const advancedResults=require('../middleware/advancedResult')

const {protect,authorize}=require('../middlewares/auth')
router.route('/').post(protect,authorize('user','admin'),addItem).get(advancedResults(Item),getItems);
router.route('/:id').put(protect,authorize('user','admin'),updateItem).delete(protect,authorize('user','admin'),deleteItem).get(getItem)
router.route('/:id/photo').put(protect,authorize('user','admin'),itemPhotoUpload);
module.exports=router