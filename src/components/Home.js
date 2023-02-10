import React from "react";
import Button from "@mui/material/Button";
import "../styles/home.css";

function Home() {
  return (
    <>
      <div className="lmplab-homepage-main">
        <section className="homepage-secion1-main">
          <div className="section1-bgImg-main">
            <img className="section1-bgImg" src=""></img>
          </div>
          <h1>bringing the future of decentralization to you</h1>
          <Button variant="outlined">Primary</Button>
        </section>
      </div>
    </>
  );
}

export default Home;
