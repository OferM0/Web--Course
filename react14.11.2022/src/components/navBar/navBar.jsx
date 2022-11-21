import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/dvd-shop">Dvs Shop</Link>
      </li>
    </ul>
  );
};
