import React, { useContext, useState } from "react";
import ToDoListContext from "../ToDoListContext/ToDoList.context";
import Checkbox from "./../Checkbox/Checkbox";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ToDoItem.scss";

const ToDoItem = ({ item }) => {
  // recycle variable
  let index, list;

  const [todoList, setTodoList] = useContext(ToDoListContext);

  // edit input text state
  const [onInput, setOnInput] = useState(false);

  // edit state
  const [edit, setEdit] = useState(false);

  // todoList - findIndex, filter
  const filterd = (todo) => todo.id === item.id;

  // todoList - isCompleted :fasle, filter
  const isComplteFilterd = (todo) => todo.id === item.id && !todo.isCompleted;

  // todoList
  const changeResultMap = (todo) => {
    todo.isCompleted = !todo.isCompleted;
    todo.date = new Date().toTimeString();
    return todo;
  };

  // editItem - content value change
  const resultMap = (value, item) => {
    item.content = value;
    return item;
  };

  // edit button click event
  const handleEditClick = () => {
    setOnInput(true);
    setEdit(true);
  };

  // value - edit input text value
  const editToDoItem = (value) => {
    const editItem = todoList.filter(isComplteFilterd);
    const editItemResult = editItem.map(resultMap.bind(item, value));
    index = todoList.findIndex(filterd);
    list = [...todoList];
    list.splice(index, editItemResult);
    setTodoList(list);
  };
  // save button click event
  const handleSaveClick = () => {
    setOnInput(false);
    setEdit(false);
  };
  // delete button click event
  const handleDeleteClick = () => {
    index = todoList.findIndex(filterd);
    list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  // checkbox value change event
  const handleToggleClick = () => {
    const changeItem = todoList.filter(isComplteFilterd);
    const changeItemResult = changeItem.map(changeResultMap);
    index = todoList.findIndex(filterd);
    list = [...todoList];
    list.splice(index, changeItem);
    setTodoList(list);
  };

  return (
    <li>
      <Checkbox
        type="checkbox"
        item={!onInput && item}
        edit={edit}
        onClick={handleToggleClick}
      />

      {onInput && (
        <Input name="edit" value={item.content} onChange={editToDoItem} />
      )}
      <div className="todo-btngroup">
        {!edit && (
          <Button
            type="button"
            name="edit"
            eidt={edit}
            onClick={handleEditClick}
          />
        )}
        {edit && <Button type="submit" name="save" onClick={handleSaveClick} />}

        <Button type="button" name="delete" onClick={handleDeleteClick} />
      </div>
    </li>
  );
};
export default ToDoItem;
