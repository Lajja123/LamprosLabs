import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/lampros-labs-logo.png";

function Navbar(history) {
  let activeStyle = {
    textDecoration: "underline",
    color: "#00ffff",
  };
  let activeClassName = "underline";
  const navRef = useRef();
  const closeRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const hideNavbar = () => {
    closeRef.current.classList.toggle("nav-close-btn");
  };

  return (
    <>
      <div className="navbar-flex">
        <header>
          <nav ref={navRef}>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span>Home</span>{" "}
            </NavLink>
            <NavLink
              to="/about-us"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Products
            </NavLink>
            <NavLink
              to="/inheritokens"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Inheritokens
            </NavLink>
          </nav>
          <div className="navbar-logo-main">
            <NavLink to="/">
              <img src={logo} className="navbar-logo"></img>
            </NavLink>
          </div>
        </header>
        <div className="responsive_nav">
          {" "}
          <button className="nav-btn .nav-close-btn " onClick={showNavbar}>
            <FaTimes />
          </button>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
