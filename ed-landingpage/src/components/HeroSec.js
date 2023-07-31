import React from "react";
import "../Styles/Herosec.css";
import AboutUs from "../Pages/AboutUs";
import OurSolution from "../Pages/OurSolution";
import OnboardingProcess from "../Pages/OnboardingProcess";
import Ed2100Slide from "../Pages/Ed2100Slide";
import Contact from "../Pages/Contact";
import Ed21Program from "../Pages/Ed21Program";
import OurProFeature from "../Pages/OurProFeature";
import VideoModal from "../Pages/VideoModal";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function HeroSec(props) {
  return (
    <>
      <Fade top>
        <section className="hero-section first-div-padding">
          <div className="container">
            <div className="row ">
              <div className="col-xl-6 col-lg-6  col-md-12 col-12">
                <div className="hero-heading">
                  <h3>
                    We Revolutionize <br />
                    <span> School Education Through AI.</span>
                  </h3>
                </div>
                <div className="heroAi">
                  <h4>AI powered LXP</h4>
                  <span></span>
                  <h4>Global Programs</h4>
                </div>
                <div className="players">
                  <a href="#contact" className="primary-btns">
                    Book a demo
                  </a>
                  {/* <div className="playicons">
                  <VideoModal />
                </div> */}
                </div>
                <p className="patent-ttile">*patent in progress</p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade>
        <AboutUs />
      </Fade>
      <Fade>
        <OurProFeature />
      </Fade>
      <Fade>
        <Ed21Program />
      </Fade>
      <Fade>
        <OurSolution />
      </Fade>
      <Fade>
        <Ed2100Slide />
      </Fade>
      <Fade>
        <OnboardingProcess />
      </Fade>
      <Contact />
    </>
  );
}

export default HeroSec;
