import React from "react";
import "./style.css";

export const Product = ({
  title,
  description,
  imageUrl,
  price,
  addProduct,
}) => {
  return (
    <div className="card myCard">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {title} - {price}$
        </h5>
        <p className="card-text">{description}</p>
        <button onClick={addProduct} className="btn btn-primary buyButton">
          Add To Card
        </button>
      </div>
    </div>
  );
};
