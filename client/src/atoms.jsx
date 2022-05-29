import {
  atom,
} from 'recoil';

import { getId } from './helpers';

const saved = JSON.parse(localStorage.getItem('todoList'));
export const todoListState = atom({
  key: 'TodoList',
  default: saved || [
    {
      id: getId(),
      text: "Cuci Baju",
      isComplete: false,
    }, {
      id: getId(),
      text: "Masak Nasi",
      isComplete: false,
    }
  ],
});
