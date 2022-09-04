import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../stores";
import shuffle from "../utils/randomizingArr";
export default function TodoList(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);
  const [bgRandom, setBgRandom] = useState([]);
  const [borderRandom, setBorderRandom] = useState([]);
  useMemo(() => {
    const bgRandom = [
      "bg-amber-100",
      "bg-amber-200",
      "bg-amber-300",
      "bg-teal-100",
      "bg-teal-200",
      "bg-teal-300",
      "bg-cyan-100",
      "bg-cyan-200",
      "bg-cyan-300",
      "bg-indigo-100",
      "bg-indigo-200",
      "bg-indigo-300",
    ];
    const borderRandom = [
      "border-amber-300",
      "border-amber-400",
      "border-amber-500",
      "border-teal-300",
      "border-teal-400",
      "border-teal-500",
      "border-cyan-300",
      "border-cyan-400",
      "border-cyan-500",
      "border-indigo-300",
      "border-indigo-400",
      "border-indigo-500",
    ];
    setBgRandom(bgRandom);
    setBorderRandom(borderRandom);
  }, []);

  useEffect(() => {
    shuffle(bgRandom);
    shuffle(borderRandom);
  }, [bgRandom, borderRandom]);

  if (todos.length !== 0) {
    return todos.map((todo, i) => {
      return (
        <div
          className={`w-full max-h-14 border-[1.5px] flex justify-between p-2 mt-1 ${
            bgRandom[i % 12]
          } ${borderRandom[i % 12]}`}
          key={todo.id}
        >
          <p className="font-semibold text-lg max-w-[75%] truncate">
            {todo.task}
          </p>
          <button
            className="border rounded px-2 font-semibold border-red-300 bg-white text-red-500 hover:bg-red-600 hover:border-red-600 hover:text-white shadow-sm drop-shadow-sm z-20"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteTask({ id: todo.id }));
            }}
          >
            Hapus
          </button>
        </div>
      );
    });
  } else {
    return <div>No Data</div>;
  }
}
