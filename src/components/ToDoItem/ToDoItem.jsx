import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Checkbox from "./../Checkbox/Checkbox";
import "./ToDoItem.scss";

const ToDoItem = ({ item }) => {
  console.log(item);
  return (
    <li key={item.id}>
      <Checkbox type="checkbox" value={item.isCompleted} />
      <Input type="text" value={item.title} />

      <div className="todo-btngroup">
        <Button type="button" name="edit" />
        <Button type="button" name="delete" />
      </div>
    </li>
  );
};
export default ToDoItem;
