import React, { useRef, useState } from "react";
import "tw-elements";
import "../styles/home.css";
import Carousel from "react-elastic-carousel";
import section1Img from "../assets/images/section1-img.png";
import section2Img from "../assets/images/section2-img.png";
import { Link } from "react-router-dom";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import { question } from "./api";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const [show, setShow] = useState(false);
  const faqRef = useRef(null);

  return (
    <>
      <div className="lmplab-homepage-main-bg">
        <Navbar />
        <section className="homepage-secion1-main">
          <div className="section1-bgImg-main">
            <img className="section1-bgImg" src={section1Img}></img>
            <div className="left-border"></div>
          </div>
          <div className="section1-position-main">
            <h1 className="section1-heading">bringing the future </h1>
            <h1 className="section1-heading">
              of <span className="color-change-text">decentralization</span>
            </h1>
            <h1 className="section1-heading">to you</h1>
            <Link to="/products">
              <button variant="outlined" id="section1-button">
                Explore Our Products
              </button>
            </Link>
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
            <Link to="/about-Us">
              <button variant="outlined" id="section2-button">
                know more
              </button>
            </Link>
          </div>
        </section>{" "}
        <section className="homepage-secion3-main">
          <Carousel itemsToShow={2}>
            <div className="section3-card">
              <h1 className="section3-card-title">Inheritokens</h1>
              <p className="section3-card-desc">
                Secure your digital legacy with inherito-kens
              </p>
              <Link to="/inheritokens">
                <button className="section3-card-button ">Know More</button>
              </Link>
            </div>
            <div className="section3-card">
              <h1 className="section3-card-title">x-compute Protocol</h1>
              <p className="section3-card-desc">
                Efficiently power your transactions with xCompute Protocol
              </p>
              <Link to="">
                <button className="section3-card-button ">Know More</button>
              </Link>
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
                      onClick={() => {
                        document
                          .getElementById(`paragraph${index}`)
                          .classList.add("visible");
                      }}
                    ></img>

                    <p className="accordion-que">{item.question}</p>
                  </div>
                </div>
                <div className="item  faqsub" id={`paragraph${index}`}>
                  <div className="faq-que-main">
                    <>
                      <img
                        src={minus}
                        className="accordion-icon"
                        onClick={() => {
                          document
                            .getElementById(`paragraph${index}`)
                            .classList.remove("visible");
                        }}
                      ></img>
                      <p className="accordion-ans">{item.answer}</p>
                    </>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
