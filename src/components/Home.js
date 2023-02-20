import React, { useState } from "react";
import "tw-elements";
import "../styles/home.css";
import Carousel from "react-elastic-carousel";
import section1Img from "../assets/images/section1-img.png";
import section2Img from "../assets/images/section2-img.png";
import { Outlet } from "react-router-dom";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import { question } from "./api";

function Home() {
  const [show, setShow] = useState(false);
  const data = [
    {
      id: 1,
      question: "What are the services do you offer",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis vitae tempora quod provident tenetur culpa dolore facere? Earum, dolor?",
    },
    {
      id: 2,
      question: "what are our preferred method of payment",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam",
    },
  ];
  return (
    <>
      <div className="lmplab-homepage-main-bg">
        <section className="homepage-secion1-main">
          <div className="section1-bgImg-main">
            <img className="section1-bgImg" src={section1Img}></img>
          </div>
          <div className="section1-position-main">
            <h1 className="section1-heading">bringing the future </h1>
            <h1 className="section1-heading">
              of <span className="color-change-text">decentralization</span>
            </h1>
            <h1 className="section1-heading">to you</h1>
            <button variant="outlined" id="section1-button">
              Explore Our Products
            </button>
          </div>
          <div className="section1-left-border"></div>
        </section>
        <section className="homepage-secion2-main">
          <img className="section2-Img" src={section2Img}></img>
          <div className="section2-flex">
            <p className="section2-pera">
              At Lampros Labs, we are pushing the boundaries of what's possible
              with web3 technology. Our innovative solutions empower individuals
              and or ganizations to take control of their digital assets and
              data, fostering a decentralized future where transparency and
              security are the norm. We are dedicated to making decentralized
              systems accessible and easy for everyone, join us in leading the
              way towards a more equitable and transparent society through web3
              technology.
            </p>
            <button variant="outlined" id="section2-button">
              know more
            </button>
          </div>
        </section>{" "}
        <section className="homepage-secion3-main">
          <Carousel itemsToShow={2}>
            <div className="section3-card">
              <h1 className="section3-card-title">Inheritokens</h1>
              <p className="section3-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
              <button className="section3-card-button ">Know More</button>
            </div>
            <div className="section3-card">
              <h1 className="section3-card-title">x-compute Protocol</h1>
              <p className="section3-card-desc">
                Efficiently power your transactions with xCompute Protocol
              </p>
              <button className="section3-card-button ">Know More</button>
            </div>
            <div className="section3-card">
              <h1 className="section3-card-title">Inheritokens</h1>
              <p className="section3-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
              <button className="section3-card-button ">Know More</button>
            </div>
            <div className="section3-card">
              <h1 className="section3-card-title">Inheritokens</h1>
              <p className="section3-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
              <button className="section3-card-button ">Know More</button>
            </div>
          </Carousel>
        </section>{" "}
        <section className="homepage-secion4-main">
          <h1 className="sectio4-title">FAQS</h1>
          <div className="faq-accordion-main">
            {" "}
            {question.map((item, index) => (
              <>
                <div className="item">
                  <div className="faq-que-main">
                    <img
                      src={plus}
                      className="accordion-icon"
                      onClick={() => setShow(!show)}
                    ></img>

                    <p classNam="accordion-que">{item.question}</p>
                  </div>
                </div>
                {show && (
                  <div className="item">
                    <div className="faq-que-main">
                      <>
                        <img
                          src={minus}
                          className="accordion-icon"
                          onClick={() => setShow(!show)}
                        ></img>
                        <p className="accordion-ans">{item.answer}</p>
                      </>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </section>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Home;
