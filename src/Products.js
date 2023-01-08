import React from "react";
import './Products.css'

const Products = (props) => {
  const products = props.products;

  console.log(products);
  return (
    <div>
      {
      products.map((product) => {
        return (
          <div key={product.id} className="product">
            <h1>{product.brand}</h1>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>{product.stock}</h3>
            <h3>{product.price}$</h3>
            <div>
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
              <span className="material-symbols-outlined">
                remove_shopping_cart
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
