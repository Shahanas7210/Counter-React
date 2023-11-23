import React from "react";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
