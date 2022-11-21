import React, { useState } from "react";
import { NavBar } from "../navBar/navBar";
import { Counter } from "../counter/counter";

export const CounterList = ({ total }) => {
  const [total, setTotal] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
    incrementTotal(total + 1);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount1(0);
          setCount2(0);
        }}
      >
        Reset
      </button>
      <Counter>
        increment={incrementCount1}
        decrement=
        {() => {
          setCount1(count1 - 1);
          decrementTotal(total - 1);
        }}
      </Counter>
      <Counter>
        increment=
        {() => {
          setCount2(count2 + 1);
          incrementTotal(total + 1);
        }}
        decrement=
        {() => {
          setCount2(count1 - 1);
          decrementTotal(total - 1);
        }}
      </Counter>
    </>
  );
};

export default counterList;
