import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

export default function UserDetails() {
    const [userInfo , setuserInfo] = useState()
    // Obtain Route Parameter
//    const {id} =   useParams()  //{id: '7'}

   // Obtain data from state
     const result =   useLocation()
    
   
   useEffect(()=>{
    console.log(result)
    // axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    axios.get('https://jsonplaceholder.typicode.com/users/'+result.state.uid)
    .then((response)=>{
        setuserInfo(response.data)
    })
    .catch((error)=>console.log(error))
   },[])
  return (
    <div>
          <br/><br/>
            <table border={1}>
                   <tbody>
                       <tr>
                           <th>Username</th>
                           <td>{userInfo?.email}</td>
                       </tr>
                       <tr>
                           <th>Phone number</th>
                           <td>{userInfo?.phone}</td>
                       </tr>
                       <tr>
                           <th>Address</th>
                           <td>{userInfo?.address.city}</td>
                       </tr>
                       
                   </tbody>
            </table>
             <br/><br/>
            <Link to='personal' state={{personal:userInfo}}>Perosnal Info</Link> &nbsp;&nbsp;
             <Link to='address' state={{address:userInfo?.address}}>Address Info</Link>
          <br/>
          {/* Render Nested Route component */}
          <Outlet/>
    </div>
  )
}
