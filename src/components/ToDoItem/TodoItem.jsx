import React, { useContext, useState, useEffect } from "react";
import TodoListContext from "../TodoListContext/TodoList.context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import "./TodoItem.scss";

const TodoItem = ({ date, isCompleted }) => {
  let index, list, item, result;

  const [todoList, setTodoList] = useContext(TodoListContext);

  const [active, setActive] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const itemMatchingID = (item) => {
    return item.id === date.id;
  };

  const incompleteItem = (item) => {
    return item.id === date.id && !item.isCompleted;
  };

  const changeItemToCompleted = (date) => {
    date.isCompleted = !date.isCompleted;
    date.created = new Date();
    return date;
  };

  const changeItemContent = (value, date) => {
    date.content = value;
    return date;
  };

  const handleEditClick = () => {
    setActive(true);
  };

  const todoEditItem = (value) => {
    item = todoList.filter(incompleteItem);
    result = item.map(changeItemContent.bind(date, value));
    index = todoList.findIndex(itemMatchingID);
    list = [...todoList];
    list.splice(index, result);
    setTodoList(list);
  };

  const handleSaveClick = () => {
    setActive(false);
  };

  const handleDeleteClick = () => {
    index = todoList.findIndex(itemMatchingID);
    list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  // const handleCheckboxClick = () => {
  //   item = todoList.filter(incompleteItem);
  //   result = item.map(changeItemToCompleted);
  //   index = todoList.findIndex(itemMatchingID);
  //   list = [...todoList];
  //   list.splice(index, result);
  //   setTodoList(list);
  // };

  const handleCheckboxChange = (checked) => {
    setIsChecked(true);
  };

  useEffect(() => {
    const item = todoList.find((item) => item.id === date.id);
    const index = todoList.findIndex((item) => item.id === date.id);
    const list = [...todoList];
    if (isChecked && !item.isCompleted) {
      item.created = new Date();
      item.isCompleted = true;
      list.splice(index, item);
      setTodoList(list);
    } else {
    }
  }, [isChecked]);
  return (
    <li>
      <Checkbox type="checkbox" id={date.id} onChange={handleCheckboxChange} />

      {!isCompleted && (
        <Input
          type="text"
          id={date.id}
          value={date.content}
          name={active ? "edit" : active}
          active={active}
          onChange={todoEditItem}
        />
      )}

      {/* !isCompleted && !active -> edit 표시 */}
      {/* isCompleted -> text 표시 */}
      <div className="todo-btngroup">
        {!isCompleted === !active && (
          <Button
            type="button"
            name="edit"
            active={active}
            onClick={handleEditClick}
          />
        )}
        {active && (
          <Button type="submit" name="save" onClick={handleSaveClick} />
        )}

        <Button type="button" name="delete" onClick={handleDeleteClick} />
      </div>
    </li>
  );
};
export default TodoItem;
