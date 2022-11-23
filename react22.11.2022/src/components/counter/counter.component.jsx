import React, { useState } from "react";
import "./style.css";

export const Counter = ({
  counterValue,
  counterId,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  function increment() {
    handleIncrement(counterId);
  }
  const decrement = () => {
    handleDecrement(counterId);
  };
  const deleted = () => {
    handleDelete(counterId);
  };
  return (
    <div className="counter">
      <button className="btn btn-success calc" onClick={() => increment()}>
        +
      </button>
      <span>{counterValue}</span>
      <button className="btn btn-danger calc" onClick={decrement}>
        -
      </button>
      <button className="btn btn-danger del" onClick={deleted}>
        Delete
      </button>
    </div>
  );
};
