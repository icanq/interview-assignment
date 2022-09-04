import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: { data: [] },
  reducers: {
    addTask: (state, action) => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const data = {
        id: state.data.length + 1,
        task: action.payload.task,
      };
      state.data.push(data);
      tasks.push(data);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    deleteTask: (state, action) => {
      const filteredTask = state.data.filter((e) => e.id !== action.payload.id);
      state.data = filteredTask;
      localStorage.setItem("tasks", JSON.stringify(filteredTask));
    },
    cekTask: (state) => {
      console.log("masuk sini");
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      if (tasks.length !== 0) {
        state.data = tasks;
      }
    },
  },
});
export const { addTask, deleteTask, cekTask } = todos.actions;
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: { todos: todos.reducer },
    preloadedState,
  });
};
export default configureStore({
  reducer: { todos: todos.reducer },
});
