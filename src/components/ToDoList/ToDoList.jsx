import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ToDoList.scss";

const ToDoList = () => {
  const [todoData, setToDoData] = useState([
    { id: 1, title: "testOne", isCompleted: false },
    { id: 2, title: "testTwo", isCompleted: false },
  ]);

  return (
    <main>
      <section>
        <h1>todo list</h1>
        <div>
          <h2>add item</h2>
          <form className="add-form">
            <div>
              <Input type="text" id="addInput">
                {" "}
                할 일 추가
              </Input>
              <Button type="submit" name="add" />
            </div>
            <p className="error"></p>
          </form>
        </div>
        <div className="todo">
          <h2>todo</h2>
          <ul className="incomplete">
            {todoData.map((item) => (
              <>{!item.isCompleted && <ToDoItem item={item} />}</>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default ToDoList;
