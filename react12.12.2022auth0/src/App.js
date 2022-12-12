import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login.button";
import "./components/styles/main.css";
import Welcome from "./components/welcome.component";
import { useContext, useState } from "react";

import "./components/styles/home.css";
import { ThemeContext } from "./context/theme.context";
import Toggle from "./components/toggle.component";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
          <div className="main-app">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                  <Toggle></Toggle>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/welcome" element={<Welcome />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </ThemeContext.Provider>
      );
    } else {
      return <LoginButton />;
    }
  } else {
    <h1>loading</h1>;
  }
}

export default App;
function Home() {
  const { logout } = useAuth0();

  return (
    <div className="home-container">
      <h1>Home</h1>
      <button
        className="btn btn-danger"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </div>
  );
}

function About() {
  const { theme } = useContext(ThemeContext);
  return <h2>About -- {theme}</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
