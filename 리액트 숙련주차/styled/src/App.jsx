import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid
    ${(props) => {
      return props.borderColor;
    }};
  margin: 20px;
`;

const BoxList = ["red", "green", "blue"];

const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간박스";
    case "green":
      return "초록박스";
    case "blue":
      return "파랑박스";
    default:
      return "검정박스";
  }
};

function App() {
  return (
    <>
      <GlobalStyle />
      {BoxList.map((item) => {
        return <StBox borderColor={item}>{getBoxName(item)}</StBox>;
      })}
    </>
  );
}

export default App;
