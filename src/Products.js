import React from "react";
import "./Products.css";

const Products = ({ products, handleAddProduct }) => {
  return (
    <div class="scroller">
      <div className="container">
        {products &&
          products.map((product) => {
            if (product.id <= 5) {
              return (
                <div key={product.id} className="product">
                  <div className="div-img">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="the-img"
                    />
                  </div>
                  <p className="div-price">${product.price}</p>
                  <p className="div-title">{product.title}</p>
                  <p className="div-description">{product.description}</p>
                  <button
                    className="div-button"
                    onClick={() => {
                      handleAddProduct(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Products;
