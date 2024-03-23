import React from 'react'

export default function Greet(props) {
   let {name,age,surname,isAdmin} = props.userInfo
  return (
     <div>Welcome { name} 
                 {surname},
                 {age} , 
                 {isAdmin? 'Admin':'Guest'}</div>
  )
}

/*
 props:{
   userInfo:{
        name: 'Peter',
        surname :'Parker',
        age: 23,
        isAdmin: true
  }
 }
*/