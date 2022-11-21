import React from "react";
import "./style.css";

export const HeaderComponent = ({ imageUrl, title, description }) => {
  return (
    <>
      <header>
        <img class="image-main" src={imageUrl} alt="" srcset="" />
        <h1>{title}</h1>
      </header>
      <main>
        <h2>Marvel Super Heroes</h2>
        <p>{description}</p>
      </main>
    </>
  );
};
