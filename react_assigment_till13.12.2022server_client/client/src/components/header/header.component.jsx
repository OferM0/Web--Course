import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import StudentIcon from "@mui/icons-material/School";
//import { Info } from "@mui/icons-material";

export const Header = (props) => {
  return (
    <div class="container">
      <ul class="nav flex-row">
        <li>
          <Link to="/">
            <a href="#" class="nav-link link-dark">
              <HomeIcon />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link to="/addStudent">
            <a href="#" class="nav-link link-dark">
              <StudentIcon />
              <span>Add Student</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
