import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Cuci Baju", complete: false },
    { id: 2, name: "Masak Nasi", complete: false },
  ]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const name = e.target.value;
    setInput(name);
    // console.log(input);
  };

  const handleAdd = () => {
    if (input === "") {
      return;
    }

    let id;
    if (tasks.length === 0) {
      id = 1;
    } else {
      id = tasks.length + 1;
    }
    const newInput = { id, name: input, complete: false };
    const newTask = [...tasks, newInput];
    setTasks(newTask);
    setInput("");
    // console.log(tasks);
  };

  const handleDelete = (id) => {
    // e.preventDefault();

    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(newTasks);
  };

  const handleComplete = (id) => {
    console.log(id);
    const doneTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(doneTasks);
    console.log(doneTasks);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
        <div className="input-form">
          <input value={input} onChange={(e) => handleChange(e)} name="name" />
          <button onClick={() => handleAdd()}>Tambah</button>
        </div>
      </div>
      <hr />
      <TodoList
        tasks={tasks}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
