import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // const tasks = useState(["Cuci Baju", "Masak Nasi"]);
  // const [tasks, setTasks] = useState(["Cuci Baju", "Masak Nasi"]);
  const [tasks, setTasks] = useState([
    { name: "Cuci Baju", priority: "" },
    { name: "Masak Nasi", priority: "" },
  ]);

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = () => {
    let newTask = {
      name: task,
      priority: priority,
    };

    setTasks([...tasks, { ...newTask }]);
    setTask("");
    setPriority("");
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
        <div className="priority">
          <p>Prioritas: </p>
          <div className="priority_radio">
            <input
              type="radio"
              value="Male"
              name="priority"
              onClick={() => setPriority("high")}
              checked={priority === "high"}
            />{" "}
            High
            <input
              type="radio"
              value="Female"
              name="priority"
              onClick={() => setPriority("medium")}
              checked={priority === "medium"}
            />{" "}
            Medium
            <input
              type="radio"
              value="Other"
              name="priority"
              onClick={() => setPriority("low")}
              checked={priority === "low"}
            />{" "}
            Low
          </div>
        </div>
        <button onClick={() => handleSubmit()} disabled={!task.length > 0}>
          Tambah
        </button>
      </div>

      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
