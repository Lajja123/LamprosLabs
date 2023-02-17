import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
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
            <a href="/#">Home</a>
            <a href="/#">About Us</a>
            <a href="/#">Products</a>
            <a href="/#">Inheritokens</a>{" "}
          </nav>
          <div className="navbar-logo-main">
            <img src={logo} className="navbar-logo"></img>
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
