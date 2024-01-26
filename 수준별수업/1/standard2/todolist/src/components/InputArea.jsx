import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputArea({ setTodos }) {
  const [titleInput, setTitleInput] = useState("");
  const [contentsInput, setContentsInput] = useState("");

  // 제목
  const inputChangeTitle = (e) => {
    setTitleInput(e.target.value);
  };

  // 내용
  const inputChangeContents = (e) => {
    setContentsInput(e.target.value);
  };

  // submit
  const formSubmit = (event) => {
    event.preventDefault();
    const startTodo = {
      id: uuidv4(),
      title: titleInput,
      contents: contentsInput,
      isDone: false,
    };
    setTodos((prev) => [...prev, startTodo]);
  };

  return (
    <form onSubmit={formSubmit}>
      제목 : <input required onChange={inputChangeTitle} />
      내용 : <input required onChange={inputChangeContents} />
      <button type="submit">추가</button>
    </form>
  );
}

export default InputArea;
