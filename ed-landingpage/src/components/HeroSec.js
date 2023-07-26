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
import Fade from 'react-reveal/Fade';


function HeroSec(props) {
  return (
    <>
      <section className="hero-section first-div-padding">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 col-lg-6  col-md-12 col-12">
              <div className="hero-heading">
              <Fade top duration={2000}>

                <h3>
                  We Revolutionize <br />
                  <span> School Education Through AI.</span>
                </h3>
                </Fade>
              </div>
              <div className="heroAi">
              <Fade bottom  duration={3000}>
                <h4>AI powered LXP</h4>
                <span></span>
                <h4>Global Programs</h4>
                </Fade>
              </div>
              <div className="players">
              <Fade top  duration={3000}>
                <button className="primary-btns">Book a demo</button>
                <div className="playicons">
                  <VideoModal />
                </div>
                </Fade>
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
