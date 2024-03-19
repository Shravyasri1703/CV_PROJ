import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const  coonectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : $ {coonectionInstance.connection.host}`)
    } catch (error){
        console.log("error",error)
        process.exit(1)
    }
}

export default connectDB