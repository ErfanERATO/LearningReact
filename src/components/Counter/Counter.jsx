import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handler = () => {
    setCounter(counter + 2);
  };

  return (
    <div>
      <button onClick={handler}>Click On me</button>

      <p>The Count Is: {counter}</p>
    </div>
  );
};

export default Counter;
