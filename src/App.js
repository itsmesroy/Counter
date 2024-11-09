import React, { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);


  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
  setCounter(counter - 1);
  };

  const resetCounter=()=>{
    setCounter(0);
  }
  return (
    <div className="App ">
      <h1>Counter App</h1>
       Count: {counter}
       <div>

      <button onClick={ incrementCounter } style={{  flexDirection:"column", padding:"12px"}}>Increment</button>
      <button onClick={ decrementCounter } style={{ flexDirection:"column",  padding:"12px"}}>Decrement</button>      
       </div>
       <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
