import express from 'express'
import {dataUri} from "../utils/Imageutils.js";
import {uploader} from "../utils/Cloudinary.js";
import asyncHandler from "../middleware/async.js";
// @desc    Upload Image
// @route   GET /api/products/top
// @access  Public
const uploadImage = asyncHandler(async (req, res) => {
  if(req.file) {
    const file = dataUri(req.file.originalname,req.file.buffer).content;
    return uploader.upload(file).then((result) => {
      const image = result.url;
      return res.status(200).json({
        imgLink:image
      })
    })
  }}
)

const router = express.Router()

router.post('/', uploadImage)

export default router
