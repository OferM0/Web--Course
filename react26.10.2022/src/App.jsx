import "./App.css";
import { CounterList } from "./components/countersList/counterList";
import React, { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
function App() {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      <Navbar total={total}></Navbar>

      <CounterList
        incremeentTotal={() => {
          setTotal(total + 1);
        }}
        decrementTotal={() => {
          setTotal(total - 1);
        }}
        reset={() => {
          setTotal(0);
        }}
      ></CounterList>
    </div>
  );
}

export default App;
