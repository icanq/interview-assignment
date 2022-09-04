import React  from "react";

import Task from './components/task';

const options  = [

  {
      id:1,
      label: "Critical",
      class: "text-danger"
  },
  {
      id:2,
      label:"High",
      class: "text-warning"
  },
  {
      id:3,
      label:"Medium",
      class: "text-primary"
  },
  {
      id:4,
      label:"low",
      class: "text-secondary"
  }
]

export default function TodoList({tasks,onDelete}) {
  let count = tasks.length;

  function getPriority(value){
    return options.find(x=> x.id === parseInt(value))

  }
  return (
    <>
         <h3>Number of Tasks: {count}</h3>
         <div className="scrollable">
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} priority={getPriority(task.priority)} />))}
         </div>
        
    </>
  )
}
