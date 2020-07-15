import React, { useState } from "react";
import uuid from "uuid/dist/v1";
import Form from "../Form/Form";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoListContext from "../ToDoListContext/ToDoList.context";
import "./ToDoList.scss";

const ToDoList = () => {
  const [todoData, setToDoData] = useState([
    { id: 1, content: "test One", isCompleted: false },
  ]);

  const addToDoItem = (content) => {
    setToDoData([...todoData, { id: uuid(), content, isCompleted: false }]);
  };

  return (
    <ToDoListContext.Provider value={[todoData, setToDoData]}>
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
              {todoData.map(
                (item) =>
                  !item.isCompleted && <ToDoItem key={item.id} item={item} />
              )}
            </ul>
          </div>
          <div className="todo">
            <h2>completed</h2>
          </div>
        </section>
      </main>
    </ToDoListContext.Provider>
  );
};
export default ToDoList;
