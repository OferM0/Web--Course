import React from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const MovieComponent = ({ title, description, linkVid, imageUrl }) => {
  return (
    <div className="card myCard">
      <img src={imageUrl} className="card-img-top myImage" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={linkVid}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Watch Trailer
        </a>
      </div>
    </div>
  );
};
