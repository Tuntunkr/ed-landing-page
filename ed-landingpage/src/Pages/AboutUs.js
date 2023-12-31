import React from "react";
import "../Styles/About.css";
import AI from "../assets/AI.png";
import AI2 from "../assets/Ai2.png";
import aicons from "../assets/aicons.svg";
import Fade from "react-reveal/Fade";

function AboutUs(props) {
  return (
    <>
      {/* 1nd Process start here ... */}

      <div className="container secGap">
        <div className="row  secGaps">
          <div className="col-12 col-md-6 col-lg-6 ">
            <div className="Artificial-image">
              <img src={AI} alt="proces" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 ">
            <div className="process-content">
              <div className="Artificial-title">
                <h3>
                  <span>Artificial</span> Intelligence
                </h3>

                <p className="process-mapra">
                  It is the technology that develops systems <br /> that can
                  perform routine and process <br /> oriented tasks, and help
                  humans to focus <br />
                  on more important aspects of social, <br /> emotional and
                  creative engagements.
                </p>
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
            
                <h3>
                  <span>AI in </span> Education
                </h3>
                <div className="Ailist">
                  <img src={aicons} alt="icons" />
                  <p>Each student has unique learning needs.</p>
                </div>
              {/* 2 */}
                <div className="Ailist">
                  <img src={aicons} alt="icons" />
                  <p>Education can only be improved by making it personal.</p>
                </div>
              {/* 3 */}
                <div className="Ailist">
                  <img src={aicons} alt="icons"  className="arrowicons"/>
                  <p className="ed-paras">
                    Education can be personalized for each student through  AI.
                     (AI does not replace teachers but enables them).
                  </p>
                </div>
            </div>
          </div>
          <div className="col-sm">
            {/* image */}
            <div className="Artificial-image-second">
                <img src={AI2} alt="proces" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
