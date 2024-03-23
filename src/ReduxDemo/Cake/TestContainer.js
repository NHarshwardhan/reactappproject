import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './cakeAction'

export default function TestContainer() {
  
  // Access redux store state
  const reduxState = useSelector((state)=>state) // {numberofCakes: 30}
  // dispatcha action
  const dispatch = useDispatch()

  
  return (
    <div>
          <h1> Number of cakes : {reduxState.numberOfCakes}</h1>
          <button onClick={()=>dispatch(buyCake())} >Buy Cake</button>
    </div>
  )

}
