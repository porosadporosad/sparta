import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import Text from "./Text";

function Main({ onClickEvent }) {
  const mainContext = "고수";
  const mainNumber = 752;

  console.log("Main 렌더링 됨");

  return (
    <TextContext.Provider
      value={{
        mainContext,
        mainNumber,
      }}
    >
      <Text></Text>
      <button onClick={onClickEvent}>초기화</button>
    </TextContext.Provider>
  );
}

export default React.memo(Main);
