import React from "react";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import FaceIconfrom from "@mui/icons-material/Face";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Info } from "@mui/icons-material";

export const SideBar = (props) => {
  return (
    <>
      <div class="container p-3">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <Link to="/">
              <a href="#" class="nav-link link-dark" aria-current="page">
                <HomeIcon />
                <span className="section-name">Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a href="#" class="nav-link link-dark">
                <InfoIcon />
                <span className="section-name">About</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <a href="#" class="nav-link link-dark">
                <CallIcon />
                <span className="section-name">Contact Us</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <a href="#" class="nav-link link-dark">
                <MovieCreationIcon />
                <span className="section-name">Movies</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/games">
              <a href="#" class="nav-link link-dark">
                <SmartToyIcon />
                <span className="section-name">Games</span>
              </a>
            </Link>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <FaceIconfrom />
              <span className="section-name">Ofer</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
