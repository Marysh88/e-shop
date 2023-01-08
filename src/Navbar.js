import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">
          <span class="material-symbols-outlined">phone_iphone</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/shoppingcart">
            <span class="material-symbols-outlined">shopping_cart</span>
            <span>1</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
