import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <div>
          <h1>
            <link to="/" className="logo">
              Electronic Shop
            </link>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
                <link to='/' >Home</link>
            </li>
            <li>
                <link to='/signup'>SignUp</link>
            </li>
            <li>
                <link to='/cart'>Cart</link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
