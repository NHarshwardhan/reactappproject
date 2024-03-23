import React, { useState } from "react";

export default function UseStateDemo() {
  // Create a state Message
  const [message, setMessage] = useState("please subscribe");
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState(false);

  // Event handler
  const changeMessage = () => {
    // update the message state
    setMessage("Thank you for subscribing");
  };
  const incrementCounter = () => {
    // update the message state
    setCounter(counter + 1);
  };
  const changeStatus = ()=>{
       setStatus(!status)
  }
  return (
    <div>
      {status ? (
        <>
          <h2>{message}</h2>
          <button onClick={changeMessage}>subscribe</button>

          <h2>{counter}</h2>
          <button onClick={incrementCounter}>increment</button>
        </>
      ) : (
        <>
         
        </>
      )}
       <br />
          <br />
          <button onClick={changeStatus}>{status?"Hide":"Show"}</button>
    </div>
  );
}
