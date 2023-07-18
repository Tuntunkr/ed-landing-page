import React from "react";
import playicons from "../assets/playicons.svg";
import "../Styles/Herosec.css";
import AboutUs from "../Pages/AboutUs";
import OurSolution from "../Pages/OurSolution";
import OnboardingProcess from "../Pages/OnboardingProcess";
import Ed2100Slide from "../Pages/Ed2100Slide";
import Contact from "../Pages/Contact";
import Ed21Program from "../Pages/Ed21Program";
import OurProFeature from "../Pages/OurProFeature";

function HeroSec() {
  return (
    <>
      <section className="hero-section first-div-padding">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 col-lg-6  col-md-12 col-12">
              <div className="hero-heading">
                <h3>
                  We Revolutionize <br />{" "}
                  <span> School Education Through AI.</span>
                </h3>
              </div>
              <div className="heroAi">
                <h4>AI powered LXP</h4>
                <span></span>
                <h4>Global Programs</h4>
              </div>
              <div className="players">
                <button className="primary-btns">Book a demo</button>
                <div className="playicons">
                  <img src={playicons} alt="icons" />
                  <h4>Intro Video</h4>
                </div>
              </div>
            <p className="patent-ttile">*patent in progress</p>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      <OurProFeature />
      <Ed21Program />
      <OurSolution />
      <Ed2100Slide />
      <OnboardingProcess />
      <Contact />

    </>
  );
}

export default HeroSec;
