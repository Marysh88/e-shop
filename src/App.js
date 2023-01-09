import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "./ProductList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductsList />} />
        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
