import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {errorHandler} from "./middleware/error.js";
import connectDB from './config/db.js'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import {cloudinaryConfig} from "./utils/Cloudinary.js";
import { multerUploads} from "./utils/Imageutils.js";
import passport from "passport";
//configuring all the secrets
dotenv.config()
import './config/passport'

//connecting the database
connectDB()
//initializing the express app
const app = express()
//accepting request data
app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }));
//connecting the Strategy to passport
app.use(passport.initialize())
passportConfig(passport)
//configuring cloudinary backend image api
app.use('*', cloudinaryConfig);
//enabling cors
app.use(cors())
// Passport middleware

app.use(passport.session())

//all the routes
app.get('/google')
app.use('/', productRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/auth', authRoutes);
app.use('/api/orders', orderRoutes)
app.use('/api/v1/users', adminRoutes);
app.use('/api/v1/upload',multerUploads, uploadRoutes);
//getting paypal API
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
)
