import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TaskForm from "./components/task-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
  const [tasks, setTasks] = useState([]);
  let storedTask = JSON.parse(localStorage.getItem("tasks"));

  const getTasks = () => {
    storedTask = JSON.parse(localStorage.getItem("tasks"));
  }
  const addTask = (task) => {
    const id = tasks?.length + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    localStorage.setItem("tasks", JSON.stringify(deleteTask));
  }

  useEffect(() => {
    if (storedTask == null) {
      setTasks([])
    } else {
      setTasks(storedTask);
    }
  }, [])


  return (
    <div className="App container h-100">
      <div className="h-100 d-flex align-items-center justify-content-center">


        <Card style={{ width: '48rem', height: "30rem" }} className="rounded-end bg-grey">
          <Card.Body >
            <div className="row mb-3">
              <h3>Task To Do</h3>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <TaskForm onSave={addTask} />
              </div>
              <div className="col-sm-6">
                <TodoList tasks={tasks} onDelete={deleteTask} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
