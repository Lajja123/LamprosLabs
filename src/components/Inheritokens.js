import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/Inheritokens.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Inheritokens() {
  return (
    <>
      <div className="inheri-main-bg">
        <Navbar />
        <div className="inheri-main">
          <h1 className="inheri-title">Inheritokens</h1>
          <section className="section1-inheri">
            <div className="inheri-section1-card">
              <p className="inheri-section1-card-desc">
                Imagine a world where your crypto assets are secure and
                accessible to your loved ones, even after you're gone. That's
                exactly what our flag- ship product, Inheritokens, offers.
                Inheritokens lets you appoint a nominee, and securely passes on
                your crypto assets to them in the event of your death. It's a
                revolutionary way. to ensure your hard-earned assets are
                protect- ed and accessible to those you care about most.
              </p>
            </div>
            <div className="inheri-grid-container">
              <div class="inheri-grid-item"></div>
              <div class="inheri-grid-item"></div>
              <div class="inheri-grid-item"></div>
              <div class="inheri-grid-item"></div>
            </div>
          </section>
        </div>
        <Footer />
      </div>{" "}
    </>
  );
}
export default Inheritokens;
