import React, { useContext, useState } from "react";
import Input from "../Input/Input";
import Checkbox from "./../Checkbox/Checkbox";
import Button from "../Button/Button";
import ToDoListContext from "../ToDoListContext/ToDoList.context";
import "./ToDoItem.scss";

const ToDoItem = ({ item }) => {
  const [todoData, setToDoData] = useContext(ToDoListContext);
  const [onInput, setOnInput] = useState(false);

  const handleEditClick = () => {
    setOnInput(true);
  };

  const handleDeleteClick = () => {
    const index = todoData.findIndex((todo) => todo.id === item.id);
    const list = [...todoData];
    list.splice(index, 1);
    setToDoData(list);
  };

  const handleCheckToggle = (value) => {
    if (value === "false") {
    }
  };

  return (
    <li>
      <Checkbox
        type="checkbox"
        onClick={handleCheckToggle}
        item={!onInput && item}
      />
      {onInput && <Input value={item.content} />}
      <div className="todo-btngroup">
        <Button type="button" onClick={handleEditClick} name="edit" />
        <Button type="button" onClick={handleDeleteClick} name="delete" />
      </div>
    </li>
  );
};
export default ToDoItem;
