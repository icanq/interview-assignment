export default function TodoList({ tasks, handleDelete, handleComplete }) {
  return (
    <div className="list-box">
      {tasks.map((task) => (
        <li className={task.complete ? "completed-list" : "list"} key={task.id}>
          <div className="taskname">{task.name}</div>
          <div>
            <button onClick={() => handleDelete(task.id)}>Hapus</button>
            <input
              type="checkbox"
              onClick={() => handleComplete(task.id)}
            ></input>
          </div>
        </li>
      ))}
    </div>
  );
}
