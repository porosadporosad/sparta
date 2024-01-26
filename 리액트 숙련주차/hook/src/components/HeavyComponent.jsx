import React, { useMemo, useState } from "react";

function HeavyComponent() {
  const [count, setCount] = useState(0);
  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };

  const value = useMemo(() => heavyWork(), []);
  console.log(value);
  return (
    <>
      <p>무거워요</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      {count}
    </>
  );
}

export default HeavyComponent;
