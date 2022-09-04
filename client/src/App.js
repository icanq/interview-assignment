import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodoList from "./components/TodoList";
import { addTask, cekTask } from "./stores";

function App() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  const [initBg, setInitBg] = useState("");
  useMemo(() => {}, []);

  useEffect(() => {
    const bgRandom = [
      "bg-violet-50",
      "bg-violet-100",
      "bg-violet-200",
      "bg-fuchsia-50",
      "bg-fuchsia-100",
      "bg-fuchsia-200",
      "bg-rose-50",
      "bg-rose-100",
      "bg-rose-200",
      "bg-sky-50",
      "bg-sky-100",
      "bg-sky-200",
    ];
    setInitBg(bgRandom[Math.floor(Math.random() * 12)]);
    dispatch(cekTask());
  }, [dispatch]);

  return (
    <div className={`h-screen ${initBg}`}>
      <div className="bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-400 hover:animate-none animate-bounce h-14 flex justify-center items-center">
        <p className="font-bold text-lg">
          Pekerjaan Rumah Yang Perlu Dilakukan
        </p>
      </div>
      <div className="p-2">
        <div className="px-5 flex justify-end items-center mt-4 md:pr-28">
          <label className="mr-3 font-bold" htmlFor="newTask">
            New Task
          </label>
          <input
            id="newTask"
            className="border-2 rounded border-black w-full md:w-[40%] lg:w-[25%] px-3 py-1 shadow-md drop-shadow-md focus:outline-none text-lg font-medium"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (task) {
                  dispatch(addTask({ task }));
                  setTask("");
                }
              }
            }}
            placeholder="Enter Task Name"
          />
          <button
            className="border-2 rounded p-1 ml-2 border-blue-700 shadow-md drop-shadow-md bg-blue-700 text-white font-semibold"
            onClick={() => {
              if (task) {
                dispatch(addTask({ task }));
                setTask("");
              }
            }}
          >
            Tambah
          </button>
        </div>
        <div className="flex justify-center items-center w-[60%] ">
          <p className="font-bold text-xl text-center">
            Task to Do: {todos.length}
          </p>
        </div>
        <div className="flex">
          <div className="flex  flex-wrap px-5 py-3 mt-4 mx-4 border-r-2 border-black relative w-[60%] max-h-[34rem] overflow-auto no-scrollbar">
            <TodoList />
          </div>
          <div className="flex justify-center items-center w-[40%] ">
            <p
              style={{
                writingMode: "vertical-lr",
              }}
              className="font-semibold text-2xl -rotate-45"
            >
              Please Finish Your ToDo
            </p>
            <p className="rotate-45 font-semibold text-2xl relative left-[4.75rem] -bottom-[105px] ">
              😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
