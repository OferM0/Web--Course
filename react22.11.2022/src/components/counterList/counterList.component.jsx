import React, { useState } from "react";
import { Counter } from "../counter/counter.component";
import { NavBar } from "../navBar/navBar.component";
import "./style.css";

let counterExample = [{ id: 0, value: 0 }];
export const CounterList = (props) => {
  const [countersArr, setCounterArr] = useState(counterExample);
  const [totalValue, setTotalValue] = useState(0);
  const handleIncrement = (id) => {
    let counter = countersArr.find((c) => c.id === id);
    counter.value = counter.value + 1;
    setTotalValue((prev) => prev + 1);
  };
  const handleDecrement = (id) => {
    let counter = countersArr.find((c) => c.id === id);
    counter.value = counter.value - 1;
    setTotalValue((prev) => prev - 1);
  };
  const handleAddNewCounter = () => {
    let nc = {
      id: countersArr.length + 1,
      value: 0,
    };
    setCounterArr((prev) => [...prev, nc]);
  };
  const handleReset = () => {
    setTotalValue(0);
    setCounterArr([]);
  };
  const handleDelete = (id) => {
    let current = countersArr.find((c) => c.id === id);
    let filterArr = countersArr.filter((c) => c.id !== id);
    setCounterArr(filterArr);
    setTotalValue((prev) => prev - current.value);
  };
  return (
    <div>
      <NavBar
        total={totalValue}
        handleAddNewCounter={handleAddNewCounter}
        handleReset={handleReset}
      ></NavBar>
      <div>
        {countersArr &&
          countersArr.map((c) => {
            return (
              <Counter
                counterValue={c.value}
                counterId={c.id}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
              ></Counter>
            );
          })}
      </div>
    </div>
  );
};
