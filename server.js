import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use("/api/v1/auth",authRoutes)

app.get('/',(req,res)=>{
    res.send(
        '<h1>hello dear</h1>'
    )
})

const PORT = process.env.PORT || 9004

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`.bgCyan.white)//color used
})