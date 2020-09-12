const express=require('express')
// const path=require('path')
const helmet=require('helmet')
const cors=require('cors')
const dotenv=require('dotenv')
//importing db.js to connect to mongodb
const connectDB=require('./config/db')
////////////////////////////////
const app=express()
//connecting to the database

////////////////////////////////
app.set('trust proxy',true);
dotenv.config({path:'./config/config.env'})
const PORT= process.env.PORT||5000
connectDB();

//enable cors
app.use(cors())
//helmet for security headers
app.use(helmet())


const server=app.listen(PORT,console.log(`server running in Production mode on port ${PORT}`))


//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});