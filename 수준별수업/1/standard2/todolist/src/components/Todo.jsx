import React from "react";

function Todo({ process, todos, setTodos }) {
  // 삭제
  const btnDelClick = (item) => {
    const delTodo = window.confirm("진짜에요?");
    const restTodo = todos.filter((todoitem) => {
      return todoitem.id !== item.id;
    });
    if (delTodo) {
      setTodos(restTodo);
    } else {
      return false;
    }
  };

  // isDone
  const btnCompleteClick = (item) => {
    const todosOne = todos.findIndex((todoitem) => {
      return todoitem.id === item.id;
    });
    const todosCopy = [...todos];
    if (!item.isDone) {
      todosCopy[todosOne].isDone = true;
    } else {
      todosCopy[todosOne].isDone = false;
    }
    setTodos(todosCopy);
  };

  return (
    <>
      {process ? <h3>Working🔥</h3> : <h3>Done🎉</h3>}
      <div className="cardsList">
        {todos
          .filter((item) => {
            return item.isDone === !process;
          })
          .map((item) => {
            return (
              <div className="card" key={item.id}>
                <h5>{item.title}</h5>
                <p>{item.contents}</p>
                <button onClick={() => btnDelClick(item)}>삭제</button>
                <button onClick={() => btnCompleteClick(item)}>
                  {process ? "완료" : "취소"}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
