import React, { useContext } from "react";
import { Product } from "../product/product.component";
import { CartContext } from "../../context/cart.context";
import "./style.css";

export const Cart = (props) => {
  const { cart } = useContext(CartContext);
  //console.log("current cart items", cart);

  return (
    <div className="mynice-cart">
      {cart &&
        cart.length > 0 &&
        cart.map((p) => {
          let { product_main_image_url, product_title, app_sale_price } = p;
          return (
            <Product
              title={product_title[0]}
              description={product_title}
              price={app_sale_price}
              imageUrl={product_main_image_url}
            ></Product>
          );
        })}
    </div>
  );
};
