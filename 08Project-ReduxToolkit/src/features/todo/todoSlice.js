import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1, text: "Chai"}]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text
      }
      state.todos.push(todo);
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.map((todo) => todo.id !== action.payload.id);
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;