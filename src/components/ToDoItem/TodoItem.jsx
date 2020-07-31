import React, { useContext, useState, useEffect } from 'react';
import TodoListContext from '../TodoListContext/TodoList.context';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import './TodoItem.scss';

const TodoItem = ({ item, isCompleted }) => {
  const [todoList, setTodoList] = useContext(TodoListContext);

  const [active, setActive] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteClick = () => {
    const index = todoList.findIndex(todo => todo.id === item.id);
    const list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  const handleEditClick = () => {
    setActive(true);
  };

  const handleSaveClick = () => {
    setActive(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(true);
  };

  const todoEditItem = value => {
    const todo = todoList.find(todo => todo.id === item.id && !isCompleted);
    todo.content = value;
    const index = todoList.findIndex(
      todo => todo.id === item.id && !isCompleted
    );
    const list = [...todoList];
    list.splice(index, todo);
    setTodoList(list);
  };
  const checkedItemTimer = list => {
    setTimeout(() => {
      setTodoList(list);
    }, 300);
  };
  useEffect(() => {
    if (!isChecked) {
      return;
    }

    const todo_item = todoList.find(todo => todo.id === item.id);
    const index = todoList.findIndex(todo => todo.id === item.id);
    const list = [...todoList];
    todo_item.created = new Date();
    list.splice(index, todo_item);

    if (isChecked && !isCompleted) {
      todo_item.isCompleted = true;
      setIsChecked(false);
      checkedItemTimer(list);
    } else if (isChecked && isCompleted) {
      todo_item.isCompleted = false;

      setIsChecked(true);
      checkedItemTimer(list);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [isChecked, isCompleted]);

  return (
    <li>
      <Checkbox
        type='checkbox'
        id={item.id}
        value={item.isCompleted}
        onChange={handleCheckboxChange}
      />

      {!active && (
        <>
          <Input
            type='text'
            label={item.content}
            id={item.id}
            value={item.content}
            active={active}
          />
        </>
      )}

      {active && (
        <>
          <Input
            type='text'
            name='edit'
            label={item.content}
            id={item.id}
            value={item.content}
            active={active}
            onChange={todoEditItem}
          />
        </>
      )}

      <div className='todo-btngroup'>
        {!active === !isCompleted && (
          <Button
            type='button'
            name='edit'
            active={active}
            onClick={handleEditClick}
          />
        )}
        {active && (
          <Button type='submit' name='save' onClick={handleSaveClick} />
        )}

        <Button type='button' name='delete' onClick={handleDeleteClick} />
      </div>
    </li>
  );
};
export default TodoItem;
