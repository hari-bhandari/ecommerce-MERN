const express=require('express')
// const path=require('path')
const cors=require('cors')
const dotenv=require('dotenv')
////////////////////////////////
const app=express()
////////////////////////////////
app.set('trust proxy',true);
dotenv.config({path:'./config/config.env'})
const PORT= process.env.PORT||5000
//enable cors
app.use(cors())



const server=app.listen(PORT,console.log(`server running in Production mode on port ${PORT}`))


//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});