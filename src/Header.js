import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            <span className="material-symbols-outlined">shopping_bag</span>
            Mary e-shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/products" className="links">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/signup" className="links">
              SignUp
            </Link>
          </li>
          <li>
            <Link to="/shoppingcart" className="cart links">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
