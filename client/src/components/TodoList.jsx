import React, { useEffect } from "react";
import {
  useRecoilValue,
} from 'recoil';
import List from '@mui/material/List';

import TodoItem from './TodoItem';
import { todoListState } from '../atoms';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </List>
  );
}
