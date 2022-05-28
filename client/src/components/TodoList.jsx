import React, { useEffect } from "react";
import {
  useRecoilValue,
} from 'recoil';

import TodoItem from './TodoItem';
import { todoListState } from '../atoms';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
