import React, { useContext, useState, useEffect } from "react";
import TodoListContext from "../TodoListContext/TodoList.context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import "./TodoItem.scss";

const TodoItem = ({ item, isCompleted }) => {
  const [todoList, setTodoList] = useContext(TodoListContext);

  const [active, setActive] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [isLabel, setIsLabel] = useState(false);

  const handleDeleteClick = () => {
    const index = todoList.findIndex((todo) => todo.id === item.id);
    const list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  const handleEditClick = () => {
    setActive(true);
    setIsLabel(true);
  };

  const handleSaveClick = () => {
    setActive(false);
    setIsLabel(false);
  };

  const handleCheckboxChange = (checked) => {
    setIsChecked(true);
    setIsLabel(false);
  };

  const todoEditItem = (value) => {
    const todo = todoList.find((todo) => todo.id === item.id && !isCompleted);
    todo.content = value;
    const index = todoList.findIndex(
      (todo) => todo.id === item.id && !isCompleted
    );
    const list = [...todoList];
    list.splice(index, todo);
    setTodoList(list);
  };

  useEffect(() => {
    const todo_item = todoList.find((todo) => todo.id === item.id);
    const index = todoList.findIndex((todo) => todo.id === item.id);
    const list = [...todoList];

    if (isChecked && !isCompleted) {
      todo_item.created = new Date();
      todo_item.isCompleted = true;
      list.splice(index, todo_item);
      window.setTimeout(() => {
        setTodoList(list);
        setIsChecked(false);
      }, 300);
    } else if (isChecked && isCompleted) {
      todo_item.created = new Date();
      todo_item.isCompleted = false;
      list.slice(index, todo_item);

      window.setTimeout(() => {
        setTodoList(list);
        setIsChecked(true);
      }, 300);
    }
  }, [isChecked, isCompleted, todoList, setTodoList, item.id]);

  return (
    <li>
      <Checkbox
        type="checkbox"
        id={item.id}
        value={item.isCompleted}
        onChange={handleCheckboxChange}
      />

      {!active && (
        <>
          <Input
            type="text"
            label={isLabel}
            id={item.id}
            value={item.content}
            active={active}
          />
        </>
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
