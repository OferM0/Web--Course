import React from "react";
import "./navBar.css";

export const NavBar = ({ total }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg my-nav-bar">
        <div>
          <a className="navbar-brand" href="#">
            Total
          </a>
          <span className="total btn-primary btn">{total}</span>
        </div>
      </nav>
      <button className="btn btn-primary" onClick={()}>Reset</button>
    </>
  );
};
