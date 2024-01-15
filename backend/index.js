import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import todoRouter from './routes/todos.routes.js'

// Loading the variables from .env file
dotenv.config()

// Create an app
const app = express()

// Handling JSON data
app.use(express.json())

// Cors Policy handling
app.use(cors())

async function connectAndStart(){
    try {
        const connectionObject = await mongoose.connect(process.env.MONGODB_URL)
        app.listen(process.env.PORT, () => {
            console.log(`✅ Server started on PORT: `, process.env.PORT)
        })
    } catch (error) {
        console.log(error.message)
    }
}

// Connecting to mongodb and starting the server.
connectAndStart()

// Handling requests related to todos
app.use("/todos", todoRouter);
