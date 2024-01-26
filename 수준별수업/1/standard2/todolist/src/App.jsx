import React, { useState } from "react";
import "./App.css";
import TopTag from "./components/TopTag";
import InputArea from "./components/InputArea";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "리액트",
      contents: "공부하기",
      isDone: false,
    },
  ]);

  return (
    <>
      <TopTag />
      <InputArea setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
