import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Belajar Redux", votes: 0 },
    { id: 2, title: "Cuci Motor", votes: 0 },
    { id: 3, title: "Belanja Mingguan", votes: 0 },
  ],
  selectedTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    selectTodo: (state, action) => {
      state.selectedTodo = state.todos.find((t) => t.id === action.payload);
    },
    updateVotes: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.votes += 1;
    },
  },
});

export const { selectTodo, updateVotes } = todoSlice.actions;
export default todoSlice.reducer;
