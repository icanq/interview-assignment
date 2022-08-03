import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("Renders Todo List Correctly", async () => {
  render(<TodoList tasks={["masak ikan", "minum air"]} />);
  expect(screen.getByText(/masak ikan/i)).toBeInTheDocument();
  expect(screen.getByText(/minum air/i)).toBeInTheDocument();
});
