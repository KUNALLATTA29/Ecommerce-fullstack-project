import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css'

import axios from 'axios'

export default function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/auth/register`,{name,email,password,phone,address})
            console.log(res)
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/login')
            }else{
                toast.error(res.data.message)
            }
        }catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
    }
   

  return (
    <Layout>
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleSubmit} className="register-form shadow p-4 rounded">
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-input"
              onChange={(e) => setName(e.target.value)}
              id="exampleInputName"
              placeholder="Enter your name"
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="form-control custom-input"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="form-control custom-input"
              required
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
              required
              className="form-control custom-input"
              id="exampleInputPhone"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
              className="form-control custom-input"
              id="exampleInputAddress"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary custom-button w-100 mt-3"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
}
