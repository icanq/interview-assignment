import React from "react";
import {
  useRecoilValue,
} from 'recoil';

import TodoItem from './TodoItem';
import { todoListState } from '../atoms';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
