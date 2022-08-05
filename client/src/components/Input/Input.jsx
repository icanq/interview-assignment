import React from "react";
import "./style.css";

const Input = ({ task, setTask }) => {
  return (
    <input
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="input_textfield"
      placeholder="Masukan nama tugas yang perlu dilakukan ..."
    />
  );
};

export default Input;
