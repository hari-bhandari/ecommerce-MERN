import express from 'express'
import {dataUri} from "../utils/Imageutils.js";
import {uploader} from "../utils/Cloudinary.js";
import asyncHandler from "../middleware/async.js";
// @desc    Upload Image
// @route   GET /api/products/top
// @access  Public
const uploadImage = asyncHandler(async (req, res) => {
 if(req.files){
   const links=[]
   const files = req.files;
   for (const file of files) {
     const path = dataUri(file.originalname,file.buffer).content;
     const result=await uploader.upload(path)
     links.push(result.url)
   }
   res.status(200).json({
     imgLinks:links
   })
   }}
)

const router = express.Router()

router.post('/', uploadImage)

export default router
