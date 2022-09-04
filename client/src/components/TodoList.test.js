import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { addTask, setupStore } from "../stores";
import { renderWithProviders } from "../utils/test-utils";
test("Renders Todo List Correctly", async () => {
  const store = setupStore();
  store.dispatch(addTask({ task: "makan" }));
  renderWithProviders(<TodoList />, { store });
  expect(screen.getByText(store.getState().todos.data[0].task));
  expect(screen.getByText(/Hapus/i));
});
test("Delete Todo Correctly", async () => {
  const initialState = [
    { task: "makan", id: 1 },
    { task: "minum", id: 2 },
  ];
  const x = renderWithProviders(<TodoList />, {
    preloadedState: { todos: { data: initialState } },
  });

  expect(screen.getAllByText("Hapus")).toHaveLength(2);
  fireEvent.click(screen.getAllByRole("button", { name: "Hapus" })[0]);
  expect(screen.getAllByText("Hapus")).toHaveLength(1);
});
