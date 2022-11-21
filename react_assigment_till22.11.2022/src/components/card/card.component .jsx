import React from "react";
import "./style.css";

export const CardComponent = ({ imageUrl, title, description }) => {
  return (
    <>
      <li class="list-item-container">
        <img class="list-image" src={imageUrl} alt="" srcset="" />
        <div class="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </li>
    </>
  );
};
