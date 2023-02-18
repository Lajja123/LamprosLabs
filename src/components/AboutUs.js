import React from "react";
import { Outlet } from "react-router-dom";
// import "../styles/inheritokens.css";
import pImg from "../assets/images/products-img.png"

function AboutUs(){
    return(
        <><div className="products-main">
            <h1 className="products-title">Inheritokens</h1>
            <section className="section1-products">
            
        
                   
                    <div className="products-section1-card">
              
              <p className="products-section1-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
             <div></div>
           
                </div>

                
                </section>
                </div> <Outlet></Outlet></>
    )
}
export default AboutUs;