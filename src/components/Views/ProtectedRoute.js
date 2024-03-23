import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    let {Component} = props
   const navigate =  useNavigate()

  useEffect(()=>{
        let role =  sessionStorage.getItem('role')
        if(role !== 'admin' ){
               navigate('/login')
        }

  },[])  
  return (
    <div>
           <Component/>
    </div>
  )
}
