import React, { useState, useEffect } from "react";
import uuid from "uuid/dist/v1";
import TodoListContext from "../TodoListContext/TodoList.context";
import Form from "../Form/Form";
import TodoItem from "../TodoItem/TodoItem";
import CompletedItem from "../TodoItem/CompletedItem";
import "./TodoList.scss";

const TodoList = () => {
  const loadTodoList = JSON.parse(localStorage.getItem("TODO")) || [];

  const [todoList, setTodoList] = useState(loadTodoList);

  const addTodoDate = (value) => {
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        content: value,
        isCompleted: false,
        created: new Date(),
      },
    ]);
  };

  const todoCreatedSort = (dateA, dateB) => {
    return dateA["created"] < dateB["created"] ? 1 : -1;
  };
  todoList.sort(todoCreatedSort);
  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoListContext.Provider value={[todoList, setTodoList]}>
      <main>
        <section>
          <h1>todo list</h1>
          <div>
            <h2>add item</h2>
            <Form addTodoDate={addTodoDate} />
          </div>

          <div className="todo">
            <h2>todo</h2>
            <ul className="incomplete">
              {todoList.map(
                (date) =>
                  !date.isCompleted && <TodoItem key={date.id} date={date} />
              )}
            </ul>
          </div>

          <div className="todo">
            <h2>completed</h2>
            <ul className="completed">
              {todoList.map(
                (date) =>
                  date.isCompleted && (
                    <CompletedItem key={date.id} date={date} />
                  )
              )}
            </ul>
          </div>
        </section>
      </main>
    </TodoListContext.Provider>
  );
};
export default TodoList;
