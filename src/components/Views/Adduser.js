import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adduser() {
  const [registerDetails, setRegisterDetails] = useState({name:'',username:"",email:''})  
   
  const navigate  =  useNavigate()

  const handleChange = (event)=>{     
    setRegisterDetails({...registerDetails,[event.target.name]:event.target.value})
  }

  const addRecord = ()=>{
        // Sending data to backend
        axios.post(
            'https://jsonplaceholder.typicode.com/users',
            registerDetails,
            {
                headers:{
                     'Content-Type':'application/json'
                }
            }
            
            )
            .then((response)=>{
                  alert('Record Created successfully')
                  // Navigate to different component programmatically
                   navigate('/users')
                  console.log(response.data)
            })
            .catch((error)=>console.log(error.message))
  }
  return (
    <div>
         <br/><br/>
         Name: <input name='name' onChange={handleChange} type='text'/> <br/>
         Username: <input name='username' onChange={handleChange} type='text'/><br/>
         Email: <input name='email' onChange={handleChange} type='email'/><br/>
         <br/><br/>
         <button onClick={addRecord} >Save</button>

    </div>
  )
}
