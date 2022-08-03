import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // const tasks = useState(["Cuci Baju", "Masak Nasi"]);
  const [tasks, setTasks] = useState(["Cuci Baju", "Masak Nasi"]);

  const [task, setTask] = useState("");

  const handleSubmit = () => {
    console.log(task);
    console.log(tasks);
    setTasks([...tasks, task]);
    console.log(tasks);
    setTask("");
  };

  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <div className="input-task">
        <input
          value={task}
          defaultValue=""
          onChange={(e) => setTask(e.target.value)}
          className="input_textfield"
        />
        <button onClick={() => handleSubmit()} disabled={!task.length > 0}>
          Tambah
        </button>
      </div>

      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
