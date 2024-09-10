import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{id: 1, todo: "Todo Msg", checked: false}],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id,todo) => {},
  toggleTodo: (id) => {}
});

export const useTodoContext = () => 
{
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;