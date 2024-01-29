import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusN, plusOne } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  const data = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div>카운트 {data.number}</div>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(+event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(plusN(number));
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
