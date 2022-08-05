import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

// Tes 0: Render "Belum ada pekerjaan rumah yang perlu dilakukan 👍" kalau engga ada todo list
it("Render Belum ada pekerjaan rumah yang perlu dilakukan 👍 kalau engga ada todo list", async () => {
  render(<TodoList tasks={[]} />);
  expect(
    screen.getByText(/Belum ada pekerjaan rumah yang perlu dilakukan 👍/i)
  ).toBeInTheDocument();
});

// Tes 1: Render todo list
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

// Tes 2: should render same priority passed into tasks props

// Tes 3: Render todo list with priority
// Todo list harus memiliki background berdasarkan tingkat prioritas
