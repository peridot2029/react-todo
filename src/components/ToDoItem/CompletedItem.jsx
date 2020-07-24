import React, { useContext } from "react";
import TodoListContext from "../TodoListContext/TodoList.context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./TodoItem.scss";

const CompletedItem = ({ date }) => {
  let index, list, item, result;

  const [todoList, setTodoList] = useContext(TodoListContext);

  const itemMatchingID = (item) => {
    return item.id === date.id;
  };

  const completedItem = (item) => {
    return item.id === date.id && item.isCompleted;
  };

  const changeItemToIncomplete = (date) => {
    date.isCompleted = !date.isCompleted;
    date.created = new Date();
    return date;
  };

  const handleDeleteClick = () => {
    index = todoList.findIndex(itemMatchingID);
    list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  const handleCheckboxClick = () => {
    item = todoList.filter(completedItem);
    result = item.map(changeItemToIncomplete);
    index = todoList.findIndex(itemMatchingID);
    list = [...todoList];
    list.splice(index, result);
    setTodoList(list);
  };
  
  return (
    <li>
      <Input
        type="checkbox"
        id={date.id}
        value={date.content}
        onClick={handleCheckboxClick}
      />
      <div className="todo-btngroup">
        <Button type="button" name="delete" onClick={handleDeleteClick} />
      </div>
    </li>
  );
};
export default CompletedItem;
