import React, { useState } from "react";

const Counter = () => {
  // Define a state variable for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      {count === 10 ? (
        <p>End of the count</p>
      ) : (
        <button onClick={incrementCounter}>Increment</button>
      )}
    </div>
  );
};

export default Counter;
