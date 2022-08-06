import React from "react";
import "./style.css";

export default function TodoList({ tasks, setTasks }) {
  const removeTask = (index) => {
    console.log(tasks);
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  const priorityColor = (priority) => {
    if (priority === "high") {
      return "rgb(248 113 113)";
    } else if (priority === "medium") {
      return "rgb(253 230 138)";
    } else if (priority === "low") {
      return "rgb(220 252 231)";
    } else {
      return "rgb(226 232 240)";
    }
  };

  return (
    <div>
      {tasks?.length > 0 ? (
        tasks.map((task, index) => {
          return (
            <div
              key={index}
              className="todo"
              style={{ backgroundColor: `${priorityColor(task.priority)}` }}
              data-testid="task-div"
            >
              <p>{task.name}</p>
              <button onClick={removeTask}>Hapus</button>
            </div>
          );
        })
      ) : (
        <p className="no_task_paragraph">
          Belum ada pekerjaan rumah yang perlu dilakukan 👍
        </p>
      )}
    </div>
  );
}
