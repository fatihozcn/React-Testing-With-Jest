import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h3 data-testid="counter">{counter}</h3>
        <button onClick={()=>setCounter(prevCounter=>prevCounter+1)}>Increment</button>
        <button onClick={()=>setCounter(prevCounter=>prevCounter-1)}>Decrement</button>
    </div>
  );
};

export default Counter;
