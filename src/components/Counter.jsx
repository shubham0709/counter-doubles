import React from "react";
import style from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1 className={count % 2 ? style.red : style.green}>counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>up </button>
      <button onClick={() => setCount(count - 1)}>down</button>
      <button onClick={() => setCount(count * 2)}>double</button>
    </div>
  );
};

export default Counter;
