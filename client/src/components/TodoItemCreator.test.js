import React, { useEffect } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  RecoilRoot,
  useRecoilValue,
} from 'recoil';

import { todoListState } from '../atoms';
import TodoItemCreator from "./TodoItemCreator";

const RecoilObserver = ({node, onChange}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

test("Renders Todo Item Creator Correctly", async () => {
  let todoList = []
  const onChange = (value) => {
    todoList = value;
  }
  render(
    <RecoilRoot>
      <RecoilObserver node={todoListState} onChange={onChange} />
      <TodoItemCreator />
    </RecoilRoot>
  );

  fireEvent.change(screen.getByTestId("todo-creator-text"), { target: { value: "Tugas Kuliah" } });
  expect(screen.getByDisplayValue(/Tugas Kuliah/i)).toBeInTheDocument();
  
  const todoListLength = todoList.length;
  fireEvent.click(screen.getByTestId("todo-creator-text-button"));
  expect(todoList.length).toBe(todoListLength + 1);
  expect(todoList[todoListLength].text).toBe("Tugas Kuliah");
})
