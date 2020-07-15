import React from "react";

const ToDoListContext = {
  todoData: [],
  completedData: [],
};
export default React.createContext(ToDoListContext);
