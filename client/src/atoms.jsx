import {
  atom,
} from 'recoil';

import { getId } from './helpers';

export const todoListState = atom({
  key: 'TodoList',
  default: [
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
