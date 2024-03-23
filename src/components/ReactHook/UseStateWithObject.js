import React, { useState } from 'react'
import movieData from '../movie'

export default function UseStateWithObject() {
  const [loginInfo,setLoginInfo] = useState({username:'',password:''})
 const [movieList , setMovieList] = useState(movieData)

  const handleChange = (event)=>{
    setLoginInfo({...loginInfo,[event.target.name] :event.target.value})
    // setLoginInfo({username:'admin',password:''})  
}
  return (
    <div>
        <pre>
         Username : <input name='username' type="text" onChange={handleChange}/>
         Password: <input name='password' type='password' onChange={handleChange}/>
         <br/>
         <button>Login</button>
         <br/><br/>
         {JSON.stringify(loginInfo)}
         </pre>
         {
            movieList.map(movie=>(
                   <>
                     <h1>{movie.title}</h1>
                  </>
            ))
         }
    </div>
  )
}
