import React from "react";
import "./style.css";

const TodoFooter = ({ tasks }) => {
  return (
    tasks?.length > 0 && (
      <div>
        <p className="sisa-task">Sisa {tasks?.length} pekerjaan rumah lagi</p>
      </div>
    )
  );
};

export default TodoFooter;
