import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div data-test="counter">
      <h1 data-test="counter-display">
        The counter is <span>{count}</span>{" "}
      </h1>
      <button data-test="increment-button" onClick={increment}>
        Increment counter
      </button>
    </div>
  );
}

export default Counter;
