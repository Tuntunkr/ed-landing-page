import React from "react";
import "../Styles/About.css";
import AI from "../assets/AI.png";
import AI2 from "../assets/Ai2.png";
import aicons from "../assets/aicons.svg";
import Fade from 'react-reveal/Fade';



function AboutUs(props) {
  return (
    <>
      {/* 1nd Process start here ... */}

      <div className="container secGap" >

        <div className="row  secGaps">
          <div className="col-12 col-md-6 col-lg-6 ">
            <div className="Artificial-image">
            <Fade left duration={2000}>
              <img src={AI} alt="proces" />
              </Fade>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 ">
            <div className="process-content">
              <div className="Artificial-title">
              <Fade top duration={2000}>
                <h3>
                  <span>Artificial</span> Intelligence
                </h3>
                </Fade>
                <Fade bottom duration={2000}>
                <p className="process-mapra">
                  It is the technology that develops systems <br/> that can perform
                  routine and process <br/> oriented tasks, and help humans to focus <br/>
                  on more important aspects of social, <br/> emotional and creative
                  engagements
                </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2st Process section start here  */}
      <div className="container">
        <div className="row flipCol secGaptwo">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="Ai-Edu-title">
            <Fade top duration={2000}>
              <h3>
                <span>AI in </span> Education
              </h3>
              </Fade>
              <Fade bottom duration={2000}>
              <div className="Ailist">
                <img src={aicons} alt="icons" />
                <p>Each student has unique learning needs</p>
              </div>
              </Fade>
              {/* 2 */}
              <Fade bottom duration={2000}>
              <div className="Ailist">
                <img src={aicons} alt="icons" />
                <p>Education can only be improved by making it PERSONAL.</p>
              </div>
              </Fade>
              {/* 3 */}
              <Fade bottom duration={2000}>
              <div className="Ailist">
                <img src={aicons} alt="icons" />
                <p className="ed-para">
                  Education can be personalized for each student  through AI. <br/> (AI
                  does not replace  teachers but enables them)
                </p>
              </div>
              </Fade>
            </div>
          </div>
          <div className="col-sm">
            {/* image */}
            <div className="Artificial-image-second">
            <Fade right duration={2000}>
              <img src={AI2} alt="proces" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default AboutUs;
