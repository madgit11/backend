
import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/indexx.js';
const app = express();
dotenv.config({
    path:'../.env'
})
/*
(async () => {
    try{
        await mongoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error"=(error)=>{
            console.error("Connection error", error)
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app listening on ${process.env.PORT}`)
        })
    }
    catch(error)
    {
        console.error("ERROR",error)
    }
})*/
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`app listening on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("ERROR CONNECTION FAILED",err)
})