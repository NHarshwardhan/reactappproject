import React from 'react'

export default function Card(props) {

  // Event Handler without parameter
   const sayHello = ()=>{
       alert('Hello Everyone')
   }
   // Event Handler with parameter
   const PrintMovieName = (moviename)=>{
    alert(moviename)
}
  return (
    <div key={props.imgSrc}>
       <img src= {props.movieInfo.imgSrc}  width={100} height={100}/>
       <h3> {props.movieInfo.title}</h3>
        <h4>{props.movieInfo.text}</h4>
        {/* calling function without parameter */}
        <button onClick={sayHello} >SayHello</button>
        {/* calling function with parameter */}
        <button onClick={()=>PrintMovieName(props.movieInfo.title)} >PrintName</button>
    </div>
  )
}
