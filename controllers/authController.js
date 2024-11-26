import { comparePassword, hashPassword } from "../helper/authHelper.js"
import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'

export const registerController = async (req,res)=>{
    try{
        const {name, email, password, phone, address} = req.body

        if(!name || !email || !password || !phone || !address){
            return res.send({error:'All details are required'})
        }

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Register please login'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()

        return res.status(201).send({
            success:true,
            message:"User Register Successfully",
            user
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registeration',
            error
        })
    }
}


export const loginController = async(req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'invalid email or password'
            })
        }
        const user = await userModel.findOne({email})

        if(!user){
            return res.status(404).send({
                success:false,
                message:"email is not registered"
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(404).send({
                success:false,
                message:"invalid password"
            })
        }
        const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d"
        })

        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                address:user.address,
                phone:user.phone
            },
            token
        })

    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}

export const testController = (req,res) =>{
    return res.send('protected route')
}
