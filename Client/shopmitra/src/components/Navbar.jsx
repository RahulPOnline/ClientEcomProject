import React from 'react'
import logo from "../images/shopmitra.png"
import { Link } from 'react-router-dom'
export default function Navbar() {

  let style = {
    // backgroundColor: "#121724",
    backgroundColor: "rgb(234, 175, 49) ",
    width: "100%",
    margin:"auto",
    height: "20px",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",  
    padding: "10px 0",
  }

  let linkStyle = {
    textDecoration: "none",
    color: "white",
  }

  return (
    <div style={style}>
      {/* <Link to="/"  ><img style={{ width: "100px" }} src={logo} alt="" /></Link> */}
    
      <Link style={linkStyle} to="/kids" >Kids Category</Link>
      <Link style={linkStyle} to="/womens" >Womens Category</Link>
      <Link style={linkStyle} to="/mens" >Mens Category</Link>
      <Link style={linkStyle} to="/electronics" >Electronics</Link>
      <Link style={linkStyle} to="/footwear" >Footwear</Link>

    </div>
  )
}
