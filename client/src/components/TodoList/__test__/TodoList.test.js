import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../TodoList";
import App from "../../../App";

const addTodo = (todos) => {
  const inputElement = screen.getByPlaceholderText(
    /Masukan nama tugas yang perlu dilakukan .../i
  );
  const buttonElement = screen.getByRole("button", { name: /Tambah/i });
  todos.forEach((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo list", () => {
  it("should render same text passed into Input", async () => {
    // Integration test
    render(<App />);
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(
      /Masukan nama tugas yang perlu dilakukan .../i
    );
    const buttonElement = screen.getByRole("button", { name: /Tambah/i });
    fireEvent.change(inputElement, { target: { value: "Bersihin kamar" } });
    fireEvent.click(buttonElement);

    const divTodo = screen.getByText(/Bersihin kamar/i);
    expect(divTodo).toBeInTheDocument();
  });

  it("should render same text passed into Input, multiple times", async () => {
    // Integration test
    render(<App />);
    render(<TodoList tasks={[]} />);
    addTodo(["Makan nasi", "Makan air", "Ngoding", "Baca buku"]);

    const divTodos = screen.getAllByTestId("task-div");
    // Ini kenapa 6? karena di App.js udah diinisialisasi 2 task dari awal
    expect(divTodos.length).toBe(6);
  });
});

it("Render Belum ada pekerjaan rumah yang perlu dilakukan 👍 kalau engga ada todo list", async () => {
  render(<TodoList tasks={[]} />);
  expect(
    screen.getByText(/Belum ada pekerjaan rumah yang perlu dilakukan 👍/i)
  ).toBeInTheDocument();
});

test("Renders Todo List Correctly", async () => {
  render(
    <TodoList
      tasks={[
        { name: "masak ikan", priority: "" },
        { name: "minum air", priority: "" },
      ]}
    />
  );
  expect(screen.getByText(/masak ikan/i)).toBeInTheDocument();
  expect(screen.getByText(/minum air/i)).toBeInTheDocument();
});
