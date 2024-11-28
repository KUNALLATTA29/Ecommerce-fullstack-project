import { useState, useContext, createContext, useEffect } from "react";
import axios from 'axios'

const AuthContext = createContext()



const AuthProvider = ({children}) =>{
    const [auth,setAuth] = useState(()=>{
        const data = localStorage.getItem("auth");
        return data ? JSON.parse(data):{user:null,token:""}
    })

    axios.defaults.headers.common['Authorization'] = auth?.token

    useEffect(()=>{
        const data = localStorage.getItem("auth")
        if(data){
           setAuth(JSON.parse(data))
        }
    },[])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext)

export {useAuth,AuthProvider}