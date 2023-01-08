import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";

import ShoppingCart from "./ShoppingCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
