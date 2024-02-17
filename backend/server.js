import express from 'express'
import dotenv from "dotenv"
import authRoutes from './route/authRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import messageRoutes from "./route/messageRoutes.js"
import userRoutes from "./route/userRoutes.js"

import cookieParser from 'cookie-parser'

const app = express()

const PORT = process.env.PORT || 5000

// app.get("/", (req,res) => {
//     // root route http://localhost:5000
//     res.send("Hello World!!!")
// })

dotenv.config()

app.use(express.json())  // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})