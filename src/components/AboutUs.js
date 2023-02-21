import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/aboutUs.css";
import aboutImg from "../assets/images/aboutUsImg.png";
import vision from "../assets/images/vision.png";
import mission from "../assets/images/mission.png";

function AboutUs() {
  return (
    <>
      <div className="aboutUs-main-bg">
        <div className="aboutUs-main">
          <h1 className="aboutUs-title">
            <span className="color-change-text">About</span> Us
          </h1>
          <section className="section1-aboutUs">
            <div className="aboutUs-section1-card">
              <p className="aboutUs-section1-card-desc">
                At Lampros Tech Labs, we are a team of experienced web3 experts
                and enthusiasts who have been at the forefront of the industry
                since its inception. Our journey began with participation in
                hackathons, such as ETHQlobal, where we were recognized by the
                judges for our innovative ideas and solutions. Our hard work
                paid off as we won prizes at several of these hackathons, which
                served as the catalyst for the creation of Lampros Teoh Labs.
              </p>
              <p className="aboutUs-section1-card-desc  margin-desc">
                Founded in 2022, we set out with the goal of creating accessible
                and user-friendly web3 products that empower individuals and
                organizations to take control of their digital assets and data.
                Our focus on experimentation and innovation has led us to
                develop solutions such as Inheritokens and xCompute Protocol,
                which are designed to make decentralized avstame more accessible
                and easy to use for everyone.
              </p>
            </div>
            <div className="aboutImg-main-div">
              {" "}
              <img src={aboutImg} alt="" className="aboutImg" />
            </div>
          </section>
          <div className="aboutUs-desc3">
            {" "}
            <p className="aboutUs-section1-card-desc ">
              Founded in 2022, we set out with the goal of creating accessible
              and user-friendly web3 products that empower individuals and
              organizations to take control of their digital assets and data.
              Our focus on experimentation and innovation has led us to develop
              solutions such as Inheritokens and xCompute Protocol, which are
              designed to make decentralized avstame more accessible and easy to
              use for everyone.
            </p>
          </div>
          <section className="section2-aboutUs">
            <div className="aboutUs-section2-flex">
              <img src={vision} className="visionImg"></img>
              <div className="section2-aboutUs-div">
                {" "}
                <h1 className="vision-section2">vision</h1>
                <p className="desc-section2">
                  Leading experimentation and innovation in web3 solutions to
                  empower individuals and organizations.
                </p>
              </div>
            </div>
            <div className="aboutUs-section2-flex">
              <img src={mission} className="visionImg"></img>
              <div className="section2-aboutUs-div">
                {" "}
                <h1 className="vision-section2">mission</h1>
                <p className="desc-section2">
                  To provide accessible and user friendly web3 solutions,
                  promoting de- centralization for a more equitable and
                  transparent society.
                </p>
              </div>
            </div>
          </section>
          <section className="section3-aboutUs">
            <h1 className="section3-title">values</h1>
            <p className="aboutUs-section3-card-desc ">
              At Lampros Tech Labs, we believe in a set of core values that
              guide our de cision-making and actions. These values shape our
              company culture and define who we are as a team.
            </p>
            <div className="section3-card-flex">
              {" "}
              <div className="rotate-text-main">
                {" "}
                <span className="rotate-text">decentralization</span>
                <div className="aboutUs-section3-card">
                  <p className="aboutUs-section3-flexcard">
                    We are committed to promoting decentraliza- tion as a means
                    to create a more equitable and transparent soci- ety. Our
                    products and services are designed to empower individuals
                    and organizations to take control of their digital assets
                    and data.
                  </p>
                </div>{" "}
              </div>
              <div className="rotate-text-main">
                {" "}
                <span className="rotate-text2">innovation</span>
                <div className="aboutUs-section3-card">
                  <p className="aboutUs-section3-flexcard">
                    We are constantly push- ing boundaries and ex- ploring new
                    ideas to create cutting-edge products and services. We are
                    always looking for new and better ways to solve problems and
                    improve the user experience.
                  </p>
                </div>{" "}
              </div>
              <div className="rotate-text-main">
                {" "}
                <span className="rotate-text3">experimentation</span>
                <div className="aboutUs-section3-card">
                  <p className="aboutUs-section3-flexcard">
                    We believe that experi- mentation is key to progress and
                    that we learn from our failures as well as our success- es.
                    We encourage our team members to take risks and try new
                    things, knowing that this is the only way to truly push the
                    envelope.
                  </p>
                </div>{" "}
              </div>
            </div>
            <p className="aboutUs-section3-pera">
              By adhering to these values, we believe we can create a better
              future for everyone through the power of web3 technology..
            </p>
          </section>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
export default AboutUs;
