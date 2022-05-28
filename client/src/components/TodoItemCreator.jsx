import React, { useState } from "react";
import {
  useSetRecoilState,
} from 'recoil';

import { getId } from '../helpers';
import { todoListState } from '../atoms';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
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
    <div>
      <input type="text" value={inputValue} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={addItem}>Add</button>
    </div>
  );
}