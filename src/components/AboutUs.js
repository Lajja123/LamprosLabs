import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/aboutUs.css";
import pImg from "../assets/images/products-img.png";

function AboutUs() {
  return (
    <>
      <div className="aboutUs-main-bg ">
        <div className="products-main">
          <h1 className="products-title">Inheritokens</h1>
          <section className="section1-products">
            <div className="products-section1-card">
              <p className="products-section1-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
            </div>
          </section>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
export default AboutUs;
