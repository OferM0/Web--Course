import React, { useState } from "react";
import { Counter } from "../counter/counter";

export const CounterContainer = ({ decrementToal, incrementTotal }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter
        increment={() => {
          setCounter(counter + 1);
          incrementTotal();
        }}
        decrement={() => {
          setCounter(counter - 1);
          decrementToal();
        }}
        counter={counter}
      ></Counter>
    </>
  );
};
