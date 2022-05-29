import React from "react";
import { render, screen } from "@testing-library/react";
import {
  RecoilRoot,
} from 'recoil';

import TodoList from "./TodoList";

test("Renders Todo List Correctly", async () => {
  render(
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
  expect(screen.getByDisplayValue(/Cuci Baju/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Masak Nasi/i)).toBeInTheDocument();
});
