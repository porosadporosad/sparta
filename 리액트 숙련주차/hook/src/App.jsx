import React, { useCallback, useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import HeavyComponent from "./components/HeavyComponent";

function App() {
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   console.log(`hello useEffect! : ${value}`);
  // }, [value]);

  console.log("app 렌더링");

  const idRef = useRef("");
  const pwRef = useRef("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (value.length >= 10) {
      pwRef.current.focus();
    }
  }, [value]);

  const onClickEvent = useCallback(() => {
    console.log(`이전은 ${value} 입니다.`);
    setValue("");
  }, [value]);

  return (
    <div>
      {/* <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      /> */}

      <div>
        ID :{" "}
        <input
          type="text"
          ref={idRef}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        PW : <input type="password" ref={pwRef} />
      </div>
      <Main onClickEvent={onClickEvent}></Main>
      <HeavyComponent />
    </div>
  );
}

export default App;
