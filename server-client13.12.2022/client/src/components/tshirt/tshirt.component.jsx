import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import axios from "axios";
import { Product } from "../product/product.component";
import { CartContext } from "../../context/cart.context";

export const Tshirt = (props) => {
  const [tshirtArr, setTshirtArr] = useState([]);
  const { setCart } = useContext(CartContext);
  const fetchData = async () => {
    let endpoint = "http://localhost:4000/api/tshirts";
    let response = await axios.get(endpoint);
    if (response.status === 200) {
      setTshirtArr(response.data);
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
    <div className="tshirtContainer">
      {tshirtArr.map((tshirt) => {
        let { product_main_image_url, product_title, app_sale_price } = tshirt;
        return (
          <Product
            title={product_title[0]}
            description={product_title}
            price={app_sale_price}
            imageUrl={product_main_image_url}
            addProduct={() => handleAddProduct(tshirt)}
          ></Product>
        );
      })}
    </div>
  );
};
