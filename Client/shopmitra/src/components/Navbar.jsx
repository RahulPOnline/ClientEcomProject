import React from 'react'
import logo from "../images/shopmitra.png"
import { Link } from 'react-router-dom'
export default function Navbar() {

  let style = {
    backgroundColor: "#121724",
    width: "100%",
    height: "auto",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    boxShadow: "rgba(191, 134, 12, 1) 0px 2px 8px 0px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",  
    padding: "10px 0"
  }

  let linkStyle = {
    textDecoration: "none",
    color: "white",
  }

  return (
    <div style={style}>
      <Link to="/"  ><img style={{ width: "100px" }} src={logo} alt="" /></Link>
    
      <Link style={linkStyle} to="/kids" >Kids Category</Link>
      <Link style={linkStyle} to="/womens" >Womens Category</Link>
      <Link style={linkStyle} to="/mens" >Mens Category</Link>
      <Link style={linkStyle} to="/electronics" >Electronics</Link>
      <Link style={linkStyle} to="/footwear" >Footwear</Link>

    </div>
  )
}
