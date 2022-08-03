import React from "react";
import './style.css';

export default function TodoList({ tasks, setTasks }) {
  const removeTask = (index) => {
    console.log(tasks);
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <div>
      {tasks?.length > 0 &&
        tasks.map((task, index) => {
          return (
            <div key={index} className="todo">
              <p>{task}</p>
              <button onClick={removeTask}>Hapus</button>
            </div>
          );
        })}
    </div>
  );
}

