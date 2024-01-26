import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <>
      <Todo process={true} todos={todos} setTodos={setTodos} />
      <Todo process={false} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;
