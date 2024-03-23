import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyCandle } from './cakeAction'

export default function CakeContainer() {
  const [qty , setQty] = useState()
  // Access redux store state
  const reduxState = useSelector((state)=>state) 
  // dispatcha action
  const dispatch = useDispatch()

  
  return (
    <div>
          <h1> Number of cakes : {reduxState.numberOfCakes}</h1>
           <input type='number'  placeholder='enter cake quantity' onChange={(e)=>setQty(e.target.value)}/>  
          <button 
               onClick={()=>dispatch(buyCake(qty))} >
                 Buy Cake
          </button>
          <h1> Number of Candles : {reduxState.numberOfCandles}</h1>
          <input type='number' placeholder='enter candle quantity' onChange={(e)=>setQty(e.target.value)}/>  

          <button 
               onClick={()=>dispatch(buyCandle(qty))} >
                 Buy Candles
          </button>
    </div>
  )
}
