import React from "react";
import {
  useRecoilState,
} from 'recoil';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { todoListState } from '../atoms';


export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <ListItem
        key={item.index}
        secondaryAction={
          <IconButton
            data-testid="delete-button"
            edge="end"
            onClick={deleteItem}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} disableRipple dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={item.isComplete}
              disableRipple
              onClick={toggleItemCompletion}
            />
          </ListItemIcon>
          <ListItemText>
            <TextField
             variant="standard"
              id="todo-creator-text"
              value={item.text}
              onChange={editItemText}
              size="small"
              inputProps={{
                "data-testid": "todo-creator-text"
              }}
            />
          </ListItemText>    
        </ListItemButton>
      </ListItem>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}