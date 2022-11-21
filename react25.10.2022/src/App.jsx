import "./App.css";
import { CounterList } from "./components/counterList/counterList";
import { NavBar } from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <NavBar total={total}></NavBar>
      <CounterList
        incrementTotal={() => {
          setTotal();
        }}
      ></CounterList>
    </div>
  );
}

export default App;
