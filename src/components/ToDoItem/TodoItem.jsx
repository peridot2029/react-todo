import React, { useContext, useState, useEffect } from "react";
import TodoListContext from "../TodoListContext/TodoList.context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import "./TodoItem.scss";

const TodoItem = ({ item, isCompleted }) => {
  let index, list, todo, result;

  const [todoList, setTodoList] = useContext(TodoListContext);

  const [active, setActive] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [isLabel, setIsLabel] = useState(false);

  const itemMatchingID = (todo) => {
    return todo.id === item.id;
  };

  const incompleteItem = (todo) => {
    return todo.id === item.id && !todo.isCompleted;
  };

  // const changeItemToCompleted = (item) => {
  //   item.isCompleted = !item.isCompleted;
  //   item.created = new Date();
  //   return item;
  // };

  const changeItemContent = (value, todo) => {
    todo.content = value;
    return todo;
  };

  const handleEditClick = () => {
    setActive(true);
    setIsLabel(true);
  };

  const todoEditItem = (value) => {
    todo = todoList.filter(incompleteItem);
    result = todo.map(changeItemContent.bind(todo, value));
    index = todoList.findIndex(itemMatchingID);
    list = [...todoList];
    list.splice(index, result);
    setTodoList(list);
  };

  const handleSaveClick = () => {
    setActive(false);
    setIsLabel(false);
  };

  const handleDeleteClick = () => {
    index = todoList.findIndex(itemMatchingID);
    list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  const handleCheckboxChange = (checked) => {
    setIsChecked(true);
    setIsLabel(false);
  };

  useEffect(() => {
    const todo_item = todoList.find((todo) => todo.id === item.id);
    const index = todoList.findIndex((todo) => todo.id === item.id);
    const list = [...todoList];

    if (isChecked && !todo_item.isCompleted) {
      item.created = new Date();
      item.isCompleted = true;
      list.splice(index, item);
      setTodoList(list);
      setIsChecked(false);
    } else if (isChecked && todo_item.isCompleted) {
      item.created = new Date();
      item.isCompleted = false;
      list.slice(index, item);
      setTodoList(list);
      setIsChecked(true);
    }
  }, [isChecked]);

  return (
    <li>
      <Checkbox
        type="checkbox"
        id={item.id}
        value={item.isCompleted}
        onChange={handleCheckboxChange}
      />

      {!active && (
        <Input
          type="text"
          label={isLabel}
          id={item.id}
          value={item.content}
          active={active}
        />
      )}

      {active && (
        <>
          <Input
            type="text"
            name="edit"
            label={isLabel}
            id={item.id}
            value={item.content}
            active={active}
            onChange={todoEditItem}
          />
        </>
      )}

      <div className="todo-btngroup">
        {!active === !isCompleted && (
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
