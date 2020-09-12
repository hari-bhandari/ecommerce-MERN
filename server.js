const express=require('express')
// const path=require('path')
const helmet=require('helmet')
const cors=require('cors')
const dotenv=require('dotenv')
//importing db.js to connect to mongodb
const connectDB=require('./config/db')
////////////////////////////////
const errorHandler=require('./middlewares/error')
//importing routes
const auth=require('./Routes/auth')
const items=require('./Routes/items')


const app=express()

////////////////////////////////
app.set('trust proxy',true);
dotenv.config({path:'./config/config.env'})
const PORT= process.env.PORT||5000
//connecting to the database

connectDB();
//Body parser
app.use(express.json());
//enable cors
app.use(cors())
//helmet for security headers
app.use(helmet())
//implementing routes
app.use('/api/auth',auth)
app.use('/api/items',items)
//implementing error handler
app.use(errorHandler)

const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))


//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});