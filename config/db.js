import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongodb")
    }catch(err){
        console.log(`error in mongo db ${err}`.bgRed.white)//color
    }
}

export default connectDB