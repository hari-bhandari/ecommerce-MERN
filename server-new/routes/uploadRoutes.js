import express from 'express'
import {dataUri} from "../utils/Imageutils.js";
import {uploader} from "../utils/Cloudinary.js";

const router = express.Router()

router.post('/', (req, res) => {
  if(req.file) {
    const file = dataUri(req.file.originalname,req.file.buffer).content;
    return uploader.upload(file).then((result) => {
      const image = result.url;
      return res.status(200).json({
        message: 'Your image has been uploded successfully to cloudinary',
        data: {
          image
        }
      })
    })
  }})

export default router
