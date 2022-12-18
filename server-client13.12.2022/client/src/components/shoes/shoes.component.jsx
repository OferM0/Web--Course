import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import axios from "axios";
import { Product } from "../product/product.component";
import { CartContext } from "../../context/cart.context";

export const Shoes = (props) => {
  const [shoesArr, setShoesArr] = useState([]);
  const { setCart } = useContext(CartContext);
  const fetchData = async () => {
    let endpoint = "http://localhost:4000/api/shoes";
    let response = await axios.get(endpoint);
    if (response.status === 200) {
      setShoesArr(response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product]);

    let cartProductIdsData = localStorage.getItem("userCart");
    if (cartProductIdsData) {
      let nCartData = `${cartProductIdsData},${product.product_id}`;
      localStorage.setItem("userCart", nCartData);
    } else {
      localStorage.setItem("userCart", product.product_id);
    }
  };
  return (
    <div className="shoesContainer">
      {shoesArr.map((shoes) => {
        let { product_main_image_url, product_title, app_sale_price } = shoes;
        return (
          <Product
            title={product_title[0]}
            description={product_title}
            price={app_sale_price}
            imageUrl={product_main_image_url}
            addProduct={() => handleAddProduct(shoes)}
          ></Product>
        );
      })}
    </div>
  );
};
