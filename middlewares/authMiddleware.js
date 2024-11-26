import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

export const requireSignIn =async (req,res,next)=>{
    try{
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(err){
        console.log(err)
    }
}


export const isAdmin = async (req,res,next)=>{
    try{
        const user = await userModel.findById(req.user._id)
        console.log(user)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:'UnAuthorized Access'
            })
        }else{
            next()
        }
    }catch(err){
        console.log(err)
        return res.status(401).send({
            success:false,
            err,
            message:"error in admin middleware"
        })
    }
}