import React, { useState } from "react";
import "./counter.css";
export const Counter = ({ increment, decrement, counter }) => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const counterCss = "btn spacing counterText";
  const decremntStyle = "btn spacing";

  const counterValue = () => {
    return counter === 0 ? "Zero" : counter;
  };
  const counterDesign = () => {
    if (counter !== 0) {
      return counterCss + " btn-primary";
    } else {
      return counterCss + " btn-warning";
    }
  };
  const decrementBtnStyle = () => {
    if (counter !== 0) {
      return decremntStyle + " btn-secondary";
    } else {
      return counterCss + " btn-light disabled";
    }
  };
  const deletefClicked = () => {
    console.log("delete was clicked");
    return deleteClicked ? "hidden" : "";
  };
  return (
    <div className={deletefClicked()}>
      <span className={counterDesign()}>{counterValue()}</span>
      <button className="btn btn-secondary spacing" onClick={increment}>
        +
      </button>
      <button className={decrementBtnStyle()} onClick={decrement}>
        -
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setDeleteClicked(true);
        }}
      >
        Delete
      </button>
    </div>
  );
};
