import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [loginInfo,setLoginInfo] = useState({username:'',password:''})
     const navigate = useNavigate()

     const handleChange = (event)=>{
       setLoginInfo({...loginInfo,[event.target.name] :event.target.value})
       // setLoginInfo({username:'admin',password:''})  
   }

  const loginProcess = ()=>{
         // Store username in session storage
         sessionStorage.setItem('role',loginInfo.username)
         navigate('/home')
   }
  return (
    <div>
       <br/>
       <h2>Login Panel </h2>
         Username : <input name='username' type="text" onChange={handleChange}/>
         <br/><br/>
         Password: <input name='password' type='password' onChange={handleChange}/>
         <br/><br/>
       
         <button onClick={loginProcess}>Login</button>
       
    </div>
  )
}
