import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
// major configs
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routes import

import userRouter from './routes/uer.routes'

//routes declaration 
app.use("/api/v1/users", userRouter)

export default app