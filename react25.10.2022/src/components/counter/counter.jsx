import React, { useState } from "react";
import "./counter.css";

export const Counter = ({ increment, decrement }) => {
  const counterCss = "btn spacing";
  const decrementCSS = "btn spacing";
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
    increment();
  };
  const handleDecrement = () => {
    if (counter != 0) {
      setCounter(counter - 1);
      decrement();
    }
  };
  const counterValue = () => {
    return counter === 0 ? "Zero" : counter;
  };
  const counterDesign = () => {
    if (!counter == 0) {
      return counterCss + " btn-primary";
    } else {
      return counterCss + " btn-warning";
    }
  };
  const decrementDesign = () => {
    if (!counter == 0) {
      return decrementCSS + " btn-secondary";
    } else {
      return decrementCSS + " btn-light disabled";
    }
  };
  return (
    <div>
      <span className={counterDesign()}>{counterValue()}</span>
      <button className="btn btn-secondary spacing" onClick={handleIncrement}>
        +
      </button>
      <button className={decrementDesign()} onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};
