import React, { useMemo, useState } from 'react'

export default function UseMemoHookDemo() {
   const [counter1, setCounter1] = useState(0)
   const [counter2, setCounter2] = useState(0)

//    const isEven = ()=>{
//        let i = 0
//        while(i <10000000000) i++
//        return counter1 %2===0
//    }


const isEven = useMemo(()=>{
    let i = 0
    while(i <10000000000) i++
    return counter1 %2===0
  },[counter1])
  return (
    <div>
         <button onClick={()=>setCounter1(counter1+1)}>Counter1 :{counter1}</button>
         {/* {isEven()? 'Even':'Odd'} */}
         {isEven? 'Even':'Odd'}
        <br/>
         <button onClick={()=>setCounter2(counter2+1)}>Counter2 :{counter2}</button>

    </div>
  )
}
