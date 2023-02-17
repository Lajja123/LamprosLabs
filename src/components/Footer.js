import { useRef } from "react";
import "../styles/footer.css";
import facebook from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import chrome from "../assets/images/chrome.png";
import linkln from "../assets/images/linkln.png";
import call from "../assets/images/call.png";

import logo from "../assets/images/lampros-labs-logo.png";

function Footer() {
  const navRef = useRef();
  return (
    <div className="footer-main">
      {" "}
      <div className="footer-flex1">
        {" "}
        <div className="navbar-logo-main">
          <img src={logo} className="navbar-logo"></img>
        </div>
        <nav ref={navRef}>
          <a href="/#">About Us</a>
          <a href="/#">Products</a>
          <a href="/#">Inheritokens</a>{" "}
        </nav>
        <div className="footer-border"></div>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <p>© Copyright 2021. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
