import React, { useState } from "react";
import {
  useSetRecoilState,
} from 'recoil';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import { getId } from '../helpers';
import { todoListState } from '../atoms';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue === '') {
      return;
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const onKeyPress = ((event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  })

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
      <InputLabel htmlFor="todo-creator-text">Tambah Pekerjaan</InputLabel>
      <FilledInput
        id="todo-creator-text"
        label="Name"
        value={inputValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
        size="small"
        inputProps={{
          "data-testid": "todo-creator-text"
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              data-testid="todo-creator-text-button"
              aria-label="toggle password visibility"
              onClick={addItem}
              edge="end"
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}