import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/lampros-labs-logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <div className="main-navbar">
        <header>
          <nav ref={navRef}>
            <Link to="/">  <a href="/#">Home</a></Link>
           <Link to="/about-us" ><a href="/#">About Us</a></Link>
            <Link to="/products"><a href="/#">Products</a></Link>
            <Link to="/inheritokens"><a href="/#">Inheritokens</a></Link>
          </nav>
          <div className="navbar-logo-main">
            <Link to="/">
            <img src={logo} className="navbar-logo"></img></Link>
          </div>
        </header>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default Navbar;
