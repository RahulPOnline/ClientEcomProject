import React from "react";
import logo from "../images/shopmitra.png"
import { Link } from "react-router-dom";
import "../style/Style.css";

export default function MainNavbar() {
  return (
    <div id="navbar">
      <div id="logodiv">
        <Link to="/"><img className="logo" src={logo} alt="Shopmitra Logo" /> </Link>        
      </div>

      <div id="searchdiv">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          id="search"
          placeholder="Search for Products, Brands and More"
        />
      </div>

      <div id="datadiv">
        <div className="user">
          <a href="#" style={{}}>
            <i className="fa-regular fa-user"></i>
            Login
            <select id="select"></select>
          </a>
        </div>

        <div className="user">
          <a href="#" style={{}}>
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </a>
        </div>

        <div className="user2">
          <a href="#" style={{}}>
            <i className="fa-solid fa-store"></i>
            Become a Seller
          </a>
        </div>

        <div id="dots">
          <a href="#">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
