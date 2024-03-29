import React from "react";
import { Link } from "react-router-dom";
import Cart from './Cart'
import CartBtn from "./CartBtn";

// test new Cart!
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
        
          BeeGoodSport
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Collection">
                Collection
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li> */}
          </ul>
          <div className="buttons">
            <Link to="/cart" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"><CartBtn></CartBtn></i>

            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
