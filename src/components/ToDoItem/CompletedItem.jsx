import React, { useContext } from "react";
import TodoListContext from "../TodoListContext/TodoList.context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./TodoItem.scss";

const CompletedItem = ({ date }) => {
  let index, list, item, result;

  const [todoList, setTodoList] = useContext(TodoListContext);

  const filterd = (item) => {
    return item.id === date.id;
  };

  const isComplteFilterd = (item) => {
    return item.id === date.id && item.isCompleted;
  };

  // isCompleted value change
  const changeResultMap = (todo) => {
    todo.isCompleted = !todo.isCompleted;
    todo.date = new Date();
    return todo;
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

  const buttonStyle = {
    paddingLeft: "65px",
  };

  return (
    <li>
      <Input type="checkbox" value={date.text} onClick={handleCheckboxClick} />
      <div className="todo-btngroup">
        <Button
          style={buttonStyle}
          type="button"
          name="delete"
          value={date.isCompleted}
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
};
export default CompletedItem;
