import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (

          <div className="header-container">
          <header className="header">
      <div className="logo">
        <Link to="/">
          <span class="material-symbols-outlined">shopping_bag</span>
        </Link>
        <span className="logo-text">Mary e-shop</span>
      </div>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/shoppingcart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>1</span>
          </Link>
        </li>
      </ul>
    </header>
    </div>

  );
}

export default Navbar;
