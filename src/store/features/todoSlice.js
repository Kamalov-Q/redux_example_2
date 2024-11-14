import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      const { todo } = action.payload;
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const { updTodo } = action.payload;
      const foundIndex = state.todos.findIndex((x) => x.id === updTodo.id);
      if (foundIndex !== -1) {
        state.todos[foundIndex] = state.todos[foundIndex] = {
          ...state.todos[foundIndex],
          ...updTodo,
        };
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((x) => x.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
