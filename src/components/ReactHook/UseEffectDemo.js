import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");


  //     // Run useEffect only once
  //    useEffect(()=>{
  //          // logic
  //         //  console.log('inside UseEffectDemo')
  //          console.log('making an api call')
  //     },[])

  // Run useEffect when counter state changes
  
  useEffect(() => {
    console.log("making an api call");
  }, [counter]);
  return (
    <div>
      <h1>Count :{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <input type="text" onChange={(event) => setName(event.target.value)} />
    </div>
  );
}
