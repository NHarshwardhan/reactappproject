import axios from 'axios'
import React, { useState } from 'react'

export default function ModifyUser() {
   
  const [userId, setUserId] = useState()
//   const [user , setUser] = useState()
  const [registerDetails, setRegisterDetails] = useState({name:'',username:"",email:''})  
const [status , setStatus] = useState(false)
  const handleChange = (event)=>{     
    setRegisterDetails({...registerDetails,[event.target.name]:event.target.value})
  }
  const searchRecordbyId = ()=>{
     axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
     .then((response)=>{
          setStatus(true)
          setRegisterDetails(response.data)
     })
     .catch((error)=>console.log(error))
  }
  const updateRecord = ()=>{
    // console.log(registerDetails)
    axios.put(
        'https://jsonplaceholder.typicode.com/users/'+userId,
        registerDetails,
        {
            headers:{
                 'Content-Type':'application/json'
            }
        }
        
        )
        .then((response)=>{
             setStatus(false)
              alert('Record updated successfully')
              console.log(response.data)
        })
        .catch((error)=>console.log(error.message))
  }

  const deleteRecord = ()=>{
      let agree = window.confirm('Are you sure to delete?')
     if(agree){
        axios.delete(
            'https://jsonplaceholder.typicode.com/users/'+userId,
             )
            .then((response)=>{
                setStatus(false)
                  alert('Record deleted successfully')
                  console.log(response.data)
            })
            .catch((error)=>console.log(error.message))
     }
     else{
          return false
     }

  }
  return (
    <div>
         <br/><br/>
         <input onChange={(event)=>setUserId(event.target.value)} 
                type='number' placeholder='enter id'/>
         <button onClick={searchRecordbyId}>Search</button>     

        <br/><br/>
      {
        status?
         <>
            Name: <input value={registerDetails.name} name='name' onChange={handleChange} type='text'/> <br/>
         Username: <input  value={registerDetails.username} name='username' onChange={handleChange} type='text'/><br/>
         Email: <input  value={registerDetails.email} name='email' onChange={handleChange} type='email'/><br/>
         <br/><br/>
         <button onClick={updateRecord} >Update</button>   &nbsp;&nbsp;
         <button onClick={deleteRecord}>Delete</button>
         </>
         :
         null
      }
    </div>
  )
}
