import React, { useEffect } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  RecoilRoot,
  useRecoilValue,
} from 'recoil';

import { todoListState } from '../atoms';
import TodoItem from "./TodoItem";

const RecoilObserver = ({node, onChange}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

test("Renders Todo Item Correctly", async () => {
  let todoList
  const onChange = jest.fn();

  const Wrapper = () => {
    todoList = useRecoilValue(todoListState);
    return (
      <>
        {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    )
  }

  render(
    <RecoilRoot>
      <RecoilObserver node={todoListState} onChange={onChange} />
      <Wrapper />
    </RecoilRoot>
  );
  expect(screen.getByDisplayValue(/Cuci Baju/i)).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole("checkbox")[0]);
  expect(todoList[0].isComplete).toBe(true);

  fireEvent.click(screen.getAllByRole("checkbox")[0]);
  expect(todoList[0].isComplete).toBe(false);

  fireEvent.change(screen.getAllByRole("textbox")[0], { target: { value: "Tugas Kuliah" } });
  expect(screen.getByDisplayValue(/Tugas Kuliah/i)).toBeInTheDocument();
  expect(todoList[0].text).toBe("Tugas Kuliah");

  const todoListLength = todoList.length;
  fireEvent.click(screen.getAllByTestId("delete-button")[0]);
  expect(todoList.length).toBe(todoListLength - 1);
});
