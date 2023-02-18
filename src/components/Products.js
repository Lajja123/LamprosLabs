import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/products.css";
import pImg from "../assets/images/products-img.png"

function Products(){
    return(
        <><div className="products-main">
            <section className="section1-products">
                <div className="section1-img-main">
                <img className="section1-img" src={pImg}>
                </img>
                </div>
                <div>
                    <h1 className="products-title">products</h1>
                    <div className="products-section1-card">
              <h1 className="products-section1-card-title">Inheritokens</h1>
              <p className="products-section1-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
              <button className="products-section1-card-button ">Know More</button>
            </div>
                </div>
                
                </section>
                </div> <Outlet></Outlet></>
    )
}
export default Products;