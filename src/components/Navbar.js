import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/lampros-labs-logo.png";
import homeIcon from "../assets/images/home.png";
import aboutUsIcon from "../assets/images/information.png";
import productsIcon from "../assets/images/box.png";
import inheriIcon from "../assets/images/interitokens-logo.png";

function Navbar(history) {
  const bulboff = require("../assets/images/home.png");
  const bulbon = require("../assets/svgs/navbarIcon.svg");
  const images = { bulboff, bulbon };
  const [img, setImg] = useState(false);

  let activeStyle = {
    color: "#00ffff",
  };
  const imgChangeHandler = () => {
    if (!img) {
      setImg(true);
    } else {
      setImg(false);
    }
  };

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
          <div className="navbar-logo-main">
            <NavLink to="/">
              <img src={logo} className="navbar-logo"></img>
            </NavLink>
          </div>
          <nav ref={navRef}>
            <div className="subnav-flex">
              <img src={!img ? bulboff : bulbon} className="home-icon "></img>

              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={imgChangeHandler}
              >
                <span>Home</span>{" "}
              </NavLink>
            </div>
            <div className="subnav-flex">
              <div className="navIcon-bg ">
                <img src={aboutUsIcon} className="about-icon "></img>
              </div>
              <NavLink
                to="/about-us"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span>About Us</span>
              </NavLink>{" "}
            </div>
            <div className="subnav-flex">
              <img src={productsIcon} className="product-icon"></img>
              <NavLink
                to="/products"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {" "}
                Products
              </NavLink>
            </div>
            <div className="subnav-flex">
              <img src={inheriIcon} className="inheri-icon"></img>
              <NavLink
                to="/inheritokens"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Inheritokens
              </NavLink>
            </div>
          </nav>
        </header>{" "}
        <button className="mobile-menu-icon " onClick={showNavbar}></button>
      </div>
    </>
  );
}

export default Navbar;
