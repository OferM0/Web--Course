import React from "react";
import "./style.css";

export const NavBar = ({ total, handleAddNewCounter, handleReset }) => {
  return (
    <div className="nav">
      <span className="total">{total}</span>
      <button className="btn btn-primary add" onClick={handleAddNewCounter}>
        Add New Counter
      </button>
      <button className="btn btn-primary add" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
