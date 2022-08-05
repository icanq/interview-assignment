import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // const tasks = useState(["Cuci Baju", "Masak Nasi"]);
  // const [tasks, setTasks] = useState(["Cuci Baju", "Masak Nasi"]);
  const [tasks, setTasks] = useState([
    { name: "masak ikan", priority: "" },
    { name: "minum air", priority: "" },
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
        <Input task={task} setTask={setTask} />
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
        <Button onClick={handleSubmit} disabled={!task.length > 0}>
          Tambah
        </Button>
      </div>

      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
