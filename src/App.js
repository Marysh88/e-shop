import React, { useState, useEffect } from "react";

import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data.products);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);
  const product ={};
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );

      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);

      console.log(cartItems);
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id 
        ? {...ProductExist,quantity: ProductExist.quantity -1}
        : item
        )
      )
    }

  }
   

  return (
    <div>
      <Router>
      <div>
        <Header/>
      </div>
        <Routes>
          
          <Route exact path="/" element={<Products />} />
          <Route
            exact
            path="/products"
            element={
              isLoading ? (
                <LoadingSpinner />
              ) : (
                <Products
                  products={products}
                  handleAddProduct={handleAddProduct}
                />
              )
            }
          />
          <Route
            exact
            path="/shoppingcart"
            element={<ShoppingCart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
