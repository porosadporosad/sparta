import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

function Text() {
  const data = useContext(TextContext);

  return (
    <div>
      {data.mainContext}
      {data.mainNumber}
    </div>
  );
}

export default Text;
