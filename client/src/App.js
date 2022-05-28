import React from "react";
import {
  RecoilRoot,
} from 'recoil';
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
        <TodoItemCreator />
        <TodoList/>
      </div>
    </RecoilRoot>
  );
}

export default App;
