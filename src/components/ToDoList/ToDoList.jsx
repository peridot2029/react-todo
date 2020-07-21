import React, { useState, useEffect } from "react";
import uuid from "uuid/dist/v1";
import Form from "../Form/Form";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoListContext from "../ToDoListContext/ToDoList.context";
import "./ToDoList.scss";

const ToDoList = () => {
  const loadedToDo = JSON.parse(localStorage.getItem("TODO")) || [];

  const [todoList, setTodoList] = useState(loadedToDo);

  const addToDoItem = (value) => {
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        content: value,
        isCompleted: false,
        date: new Date().toTimeString(),
      },
    ]);
  };

  // const todoListSort = (a, b) => {
  //   let dateA = new Date(a["date"]).getTime();
  //   let dateB = new Date(b["date"]).getTime();
  //   return dateA < dateB ? 1 : -1;
  // };

  // todoList.sort(todoListSort);

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <ToDoListContext.Provider value={[todoList, setTodoList]}>
      <main>
        <section>
          <h1>todo list</h1>
          <div>
            <h2>add item</h2>
            <Form addToDoItem={addToDoItem} />
          </div>
          <div className="todo">
            <h2>todo</h2>
            <ul className="incomplete">
              {todoList.map(
                (item) =>
                  !item.isCompleted && <ToDoItem key={item.id} item={item} />
              )}
            </ul>
          </div>

          <div className="todo">
            <h2>completed</h2>
            <ul className="completed">
              {todoList.map(
                (item) =>
                  item.isCompleted && <ToDoItem key={item.id} item={item} />
              )}
            </ul>
          </div>
        </section>
      </main>
    </ToDoListContext.Provider>
  );
};
export default ToDoList;
