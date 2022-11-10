import React, { useState } from "react";
import { Navbar } from "../navbar/navbar";
import { Counter } from "./../counter/counter";

export const CounterList = ({ incremeentTotal, decrementTotal, reset }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const incrementCount1 = () => {
    setCount1(count1 + 1);
    incremeentTotal();
  };
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount1(0);
          setCount2(0);
          reset();
        }}
      >
        Reset
      </button>
      <Counter
        increment={incrementCount1}
        decrement={() => {
          decrementTotal();
          setCount1(count1 - 1);
        }}
        counter={count1}
      ></Counter>
      <Counter
        increment={() => {
          setCount2(count2 + 1);
          incremeentTotal();
        }}
        decrement={() => {
          decrementTotal();
          setCount2(count2 - 1);
        }}
        counter={count2}
      ></Counter>
    </>
  );
};
