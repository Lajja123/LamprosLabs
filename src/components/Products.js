import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/products.css";
import pImg from "../assets/images/products-img.png";
import Carousel from "react-elastic-carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="products-main-bg">
        <Navbar />
        <div className="products-main">
          <section className="products-section1-products">
            <div className="products-section1-img-main">
              <img className="products-section1-img" src={pImg}></img>
            </div>
            <div className="products-flex-section1">
              <h1 className="products-title">products</h1>
              <Carousel itemsToShow={1}>
                <div className="products-section1-card">
                  <h1 className="products-section1-card-title">Inheritokens</h1>
                  <p className="products-section1-card-desc">
                    Secure your digital legacy with inherito-kens
                  </p>
                  <Link to="/inheritokens">
                    <button className="products-section1-card-button ">
                      Know More
                    </button>
                  </Link>
                </div>
                <div className="products-section1-card">
                  <h1 className="products-section1-card-title">
                    x-compute Protocol
                  </h1>
                  <p className="products-section1-card-desc">
                    Efficiently power your transactions with xCompute Protocol
                  </p>
                  <button className="products-section1-card-button ">
                    Know More
                  </button>
                </div>
              </Carousel>
            </div>
          </section>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}
export default Products;
