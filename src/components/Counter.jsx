import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      counter : {count}
      <button onClick={() => setCount(count + 1)}>up </button>
      <button onClick={() => setCount(count - 1)}>down</button>
      <button onClick={() => setCount(count * 2)}>double</button>
    </div>
  );
};

export default Counter;
