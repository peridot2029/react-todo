import React, { useContext, useState } from "react";
import Checkbox from "./../Checkbox/Checkbox";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ToDoListContext from "../ToDoListContext/ToDoList.context";
import "./ToDoItem.scss";

const ToDoItem = ({ item }) => {
  const [todoData, setToDoData] = useContext(ToDoListContext);
  const [onInput, setOnInput] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEditClick = (value) => {
    setOnInput(true);
    setEdit(true);
    editChange(value);
  };

  const editChange = (value) => {
    console.log(value);
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
        edit={edit}
      />
      {onInput && <Input item={item.content} onChange={editChange} />}
      <div className="todo-btngroup">
        <Button
          type="button"
          onClick={handleEditClick}
          name={edit ? "save" : "edit"}
        />
        <Button type="button" onClick={handleDeleteClick} name="delete" />
      </div>
    </li>
  );
};
export default ToDoItem;
