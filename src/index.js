//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import app from './app.js'


// simple method
const DB = 'mongodb+srv://shravyakmp:Bokaro123@cluster0.vhdhaua.mongodb.net'

mongoose.connect(DB).then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running at ${process.env.PORT}`)
    })

}).catch((err)=>{
    console.log("error !!!",err)
})






dotenv.config({
    path : './env'
})
/*
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("running....")
    })
})
.catch((err)=>{
    console.log("Mongo Db connection failed !!!", err)
})
*/










/*

import express from "express"

const app = express()

(async ()=>{
    try{
   await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("errror",(error)=>{
    console.log("ERRR: ",error)
    throw error
   })

   app.listen(process.env.PORT, ()=>{
    console.log("listening....")
   })
    }catch(error){
        console.error("ERROR : ", error)
        throw err
    }
}) () */