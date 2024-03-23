import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PersonalDetails() {
   const [personal , setPersonal] = useState()


  const result =   useLocation()
  console.log(result.state.personal)

  useEffect(()=>{
     setPersonal(result.state.personal)
  },[])

  return (
    <div>
        {personal?.username}
    </div>
  )
}
