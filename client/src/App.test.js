import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { addTask, cekTask, setupStore } from "./stores";
import { renderWithProviders } from "./utils/test-utils";
import App from "./App";

test("renders home Page", () => {
  const initialState = [];
  renderWithProviders(<App />, {
    preloadedState: { todos: { data: initialState } },
  });
  const linkElement = screen.getByText(/Pekerjaan Rumah Yang Perlu Dilakukan/i);
  const buttonTambah = screen.getByText(/Tambah/i);
  const input = screen.getByLabelText(/New Task/i);
  expect(linkElement).toBeInTheDocument();
  expect(buttonTambah).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test("should adding task todo", async () => {
  const store = setupStore();
  const taskName = "makan";
  store.dispatch(cekTask());
  const x = renderWithProviders(<App />, {
    store,
  });
  expect(store.getState().todos.data).toHaveLength(0);
  const input = screen.getByLabelText(/New Task/i);
  const button = screen.getByText(/Tambah/i);

  fireEvent.change(input, {
    target: { value: taskName },
  });
  expect(input.value).toBe(taskName);
  fireEvent.click(button);
  expect(store.getState().todos.data).toHaveLength(1);
  expect(store.getState().todos.data[0]).toHaveProperty("id");
  expect(store.getState().todos.data[0]).toHaveProperty("task");
});
