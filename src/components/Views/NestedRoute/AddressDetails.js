import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function AddressDetails() {
    const [address , setAddress] = useState()

    const result =   useLocation()
    console.log(result.state.address)
    useEffect(()=>{
        setAddress(result.state.address)
     },[])
   
  return (
    <div>{address?.city}</div>
  )
}
