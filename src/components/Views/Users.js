import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  const [users , setUsers] = useState()
  useEffect(()=>{
       
     const result =  axios.get('https://jsonplaceholder.typicode.com/users')
     // Handling Promise Object
     result
         .then((response)=>setUsers(response.data)) // resolved
         .catch((error)=>console.log(error.message)) //rejected
    
  },[])

  return (
    <div>
         <br/><br/>
        <table border={1}>
             <thead>
                  <tr>
                     <th> ID</th>
                     <th>Name</th>
                      <th>Username</th>
                  </tr>
             </thead>
             <tbody>
                {
                    users? users.map((u)=>(
                           <tr>
                            

                              <td>
                                 <Link to={`/user/details/`} state={{uid:u.id}}>{u.id}</Link>
                               </td>
                               <td>{u.name}</td>
                               <td>{u.username}</td>
                           </tr>
                     ))
                     :
                     <tr>
                         <td colSpan={3}>Loading....</td>
                     </tr>
                }
             </tbody>
        </table>
    </div>
  )
}
