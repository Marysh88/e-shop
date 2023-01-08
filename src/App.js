import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCart from "./ShoppingCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data.products);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setLoading(true);
      });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        

        <Route
          exact
          path="/products"
          element={
            isLoading ? <LoadingSpinner /> : <Products products={products} />
          }
        />

        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
