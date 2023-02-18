import { useRef } from "react";
import "../styles/footer.css";
import facebook from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import chrome from "../assets/images/chrome.png";
import linkln from "../assets/images/linkln.png";
import call from "../assets/images/call.png";
import { Link } from "react-router-dom";

import logo from "../assets/images/lampros-labs-logo.png";

function Footer() {
  const navRef = useRef();
  return (
    <div className="footer-main">
      {" "}
      <div className="footer-flex1">
        {" "}
        <div className="navbar-logo-main">
          <Link to="/">
          <img src={logo} className="navbar-logo"></img></Link>
        </div>
        <nav ref={navRef}>
        <Link to="/about-us" ><a href="/#">About Us</a></Link>
            <Link to="/products"><a href="/#">Products</a></Link>
            <Link to="/inheritokens"><a href="/#">Inheritokens</a></Link>
        </nav>
        <div className="footer-border"></div>
      </div>
      <div className="footer-icon-main">
        <img src={facebook} className="footer-icon"></img>
        <img src={insta} className="footer-icon"></img>
        <img src={chrome} className="footer-icon"></img>
        <img src={call} className="footer-icon"></img>
        <img src={linkln} className="footer-icon"></img>
      </div>
      <p className="footer-copyright">© Copyright 2021. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
