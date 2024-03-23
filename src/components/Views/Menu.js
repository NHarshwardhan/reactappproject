import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Menu() {
  const [role, setRole] = useState()

  const result = useLocation()
  console.log(result.pathname)
 
  const navigate = useNavigate()

  useEffect(()=>{
       // Get the information from Session Storage
       let userRole =  sessionStorage.getItem('role')
       setRole(userRole)
 
  },[result.pathname])
   
   const logout = ()=>{
       sessionStorage.removeItem('role')
       alert('Logged out successfully')
       navigate('/login')
   }
  return (
    <div>
      {
          role === 'admin' ?
          <>
              <Link to='/home'> Home </Link> &nbsp;&nbsp;
              <Link to='/about'> About </Link>&nbsp;&nbsp;
              <Link to='/users'> User </Link> &nbsp;&nbsp;
              <Link to='/user/create'> Add User </Link> &nbsp;&nbsp;
              <Link to='/user/edit'> Modify User </Link> &nbsp;&nbsp;
              <Link to='/articles'> Articles </Link> &nbsp;&nbsp;
              <button onClick={logout}>Logout</button> &nbsp;&nbsp;
          </>
          : role==='guest'?
          <>
              <Link to='/home'> Home </Link> &nbsp;&nbsp;
               <Link to='/about'> About </Link>&nbsp;&nbsp;       
               <Link to='/articles'> Articles </Link> &nbsp;&nbsp;
               <button onClick={logout}>Logout</button> &nbsp;&nbsp;
          </>
          :
          <>
              <Link to='/login'> Tech Park </Link> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <Link to='/login'> Login </Link>
          </>
      }
      
    </div>
  )
}
