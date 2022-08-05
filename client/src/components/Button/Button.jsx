import React from "react";
import "./style.css";

const Button = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button_tambah">
      {children}
    </button>
  );
};

export default Button;
