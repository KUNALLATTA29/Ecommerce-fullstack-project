import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import {useNavigate,useLocation} from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useAuth } from "../../context/auth";

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleSubmit =async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/auth/login`,{email,password})
            if(res.data.success){
                toast.success(res.data.message)
                setAuth({
                  ...auth,
                  user:res.data.user,
                  token:res.data.token
                })
                localStorage.setItem(
                  "auth",
                  JSON.stringify(res.data)
                )
                navigate(location.state || '/')
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
        <h1 className="register-title">LogIn</h1>
        <form onSubmit={handleSubmit} className="register-form shadow p-4 rounded">
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
          <button
            type="submit"
            className="btn btn-primary custom-button w-100 mt-3"
          >
            LogIn
          </button>
        </form>
      </div>
    </Layout>
  )
}
