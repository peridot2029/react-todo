import React, { useContext, useState } from "react";
import TodoListContext from "../TodoListContext/TodoList.context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./TodoItem.scss";

const TodoItem = ({ date }) => {
  let index, list, item, result;

  const [todoList, setTodoList] = useContext(TodoListContext);

  // edit input text state
  const [onInput, setOnInput] = useState(false);

  // edit state
  const [onEdit, setOnEdit] = useState(false);

  const filterd = (item) => {
    return item.id === date.id;
  };

  const isComplteFilterd = (item) => {
    return item.id === date.id && !item.isCompleted;
  };

  // isCompleted value change
  const changeResultMap = (date) => {
    date.isCompleted = !date.isCompleted;
    date.created = new Date();
    return date;
  };

  // edit content value change
  const resultMap = (value, date) => {
    date.text = value;
    return date;
  };

  // edit button
  const handleEditClick = () => {
    setOnInput(true);
    setOnEdit(true);
  };

  // edit input text value
  const editToDoItem = (value) => {
    item = todoList.filter(isComplteFilterd);
    result = item.map(resultMap.bind(date, value));
    index = todoList.findIndex(filterd);
    list = [...todoList];
    list.splice(index, result);
    setTodoList(list);
  };

  // save button
  const handleSaveClick = () => {
    setOnInput(false);
    setOnEdit(false);
  };
  // delete button
  const handleDeleteClick = () => {
    index = todoList.findIndex(filterd);
    list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  // checkbox value change
  const handleCheckboxClick = () => {
    item = todoList.filter(isComplteFilterd);
    result = item.map(changeResultMap);
    index = todoList.findIndex(filterd);
    list = [...todoList];
    list.splice(index, result);
    setTodoList(list);
  };

  return (
    <li>
      <Input
        type="checkbox"
        onEdit={onEdit}
        value={date.text}
        onClick={handleCheckboxClick}
      />

      {onEdit && (
        <Input name="edit" value={date.text} onChange={editToDoItem} />
      )}
      <div className="todo-btngroup">
        {!onEdit && (
          <Button
            type="button"
            name="edit"
            onEdit={onEdit}
            onClick={handleEditClick}
          />
        )}
        {onEdit && (
          <Button type="submit" name="save" onClick={handleSaveClick} />
        )}

        <Button type="button" name="delete" onClick={handleDeleteClick} />
      </div>
    </li>
  );
};
export default TodoItem;
