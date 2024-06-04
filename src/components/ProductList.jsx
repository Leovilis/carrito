import React from "react";
import { data } from "../data";
export const ProductList = () => {
  return (
    <div className="container-items">
      {data.map((products) => (
        <div className="item" key={products.id}>
          <figure>
            <img
              src={products.img}
              alt={products.nameProduct}
            />
          </figure>
          <div class="info-product">
            <h2>{products.nameProduct}</h2>
            <p class="price">${products.price}</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};
