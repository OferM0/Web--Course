import { Routes, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./components/styles/home.css";
import "./App.css";
import "./components/styles/main.css";
import Welcome from "./components/welcome.component";
import Toggle from "./components/toggle.component";
import LoginButton from "./components/login.button";
import { Shoes } from "./components/shoes/shoes.component";
import { Tshirt } from "./components/tshirt/tshirt.component";
import { Cart } from "./components/cart/cart.component";
import { CartContext } from "./context/cart.context";
import { ThemeContext } from "./context/theme.context";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const handleData = async (productIds) => {
    let endpointShoes = "http://localhost:4000/api/shoes";
    let responseShoes = await axios.get(endpointShoes);
    if (responseShoes.status === 200) {
      responseShoes.data.forEach((element) => {
        if (productIds.includes(element.product_id)) {
          setCart((prev) => [...prev, element]);
        }
      });
    }

    let endpointTshirt = "http://localhost:4000/api/tshirts";
    let responseTshirt = await axios.get(endpointTshirt);
    if (responseTshirt.status === 200) {
      responseTshirt.data.forEach((element) => {
        if (productIds.includes(element.product_id)) {
          setCart((prev) => [...prev, element]);
        }
      });
    }
  };

  useEffect(() => {
    let cartProductIdsData = localStorage.getItem("userCart");
    if (cartProductIdsData) {
      handleData(cartProductIdsData);
    }
  }, []);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <CartContext.Provider value={{ cart, setCart }}>
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
                    <Link to="/tshirt">Tshirt</Link>
                  </li>
                  <li>
                    <Link to="/shoes">Shoes</Link>
                  </li>
                  <li className="my-cart">
                    <Link to="/cart">
                      <i className="bi bi-cart"></i> cart
                    </Link>
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
                <Route path="/shoes" element={<Shoes />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/tshirt" element={<Tshirt />}></Route>
              </Routes>
            </div>
          </ThemeContext.Provider>
        </CartContext.Provider>
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
