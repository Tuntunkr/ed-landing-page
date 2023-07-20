import React, { useState } from "react";
import "../Styles/OurProduct.css";
import Accordion from "react-bootstrap/Accordion";
import img1 from "../assets/icons1.svg";
import img2 from "../assets/icons2.svg";
import img3 from "../assets/icons3.svg";
import img4 from "../assets/icons4.svg";
import img5 from "../assets/icons5.svg";
import img6 from "../assets/icons6.svg";

function OurProFeature() {
  const [cards] = useState([
    {
      bg: "#D2FCFF",
      titile: "Intelligent learning",
      description:
        "AI enabled personalized education through profiling, learning pathways, recommendation engine, assignments & personal feedbacks",
      img: "https://imgur.com/cpLPDe2.png",
    },
    {
      bg: "#ECEFFF",
      titile: "Single Window Access",
      description:
        "programs and courses from pre-k to 12th grade, academic to non-academic, domestic to international.",
      img: "https://imgur.com/Wy4lZpJ.png",
    },
    {
      bg: "#FFF0F0",

      titile: "Immersive Learning",
      description: "learning through AR, VR, 3D simulations & gamification",
      img: "https://imgur.com/VD9xTYA.png",
    },
    {
      bg: "#F5FFF0",

      titile: "Intelligent teaching",
      description:
        "as per individual student's learning needs, course recommendations, auto lesson plans, scheduling, regulated lesson flows, auto Quiz, assessments & grading.",
      img: "https://imgur.com/lVaEsXt.png",
    },
    {
      bg: "#FFF5E4",

      titile: "Consolidated growth mapping",
      description:
        "For all programs on a single platform for 360° development visibility",
      img: "https://imgur.com/qPk1xae.png",
    },
    {
      bg: "#E6E8E6",
      titile: "Consolidated educational records",
      description:
        "All educational records including certificate, transcripts, and growth analysis will be available here.",
      img: "https://imgur.com/MCtSIt0.png",
    },
  ]);

  return (
    <>
      <div className="secGap">
        <section className="container-fluid feature-section ">
          <div className="container">
            <div className="content">
              <h3>
                <span>Our Product</span> Features
              </h3>
              <p>
                <span>ed2100</span> is an AI powered LXP (Learning Experience
                Platform) forschools, which offers highly personalized <br />{" "}
                learning and teachingenvironment with world class EdTech
                solutions at your fingertips
              </p>
            </div>
          </div>

          <div className="container">
            <div className="feature-row">
              {cards.map((card, i) => {
                return (
                  <div className="feature-card">
                    <div
                      className="img-box-f"
                      style={{
                        background: card.bg,
                        borderRadius: "77px 500px 500px 77px",
                      }}
                    >
                      <img src={card.img} alt="imgs" />

                    </div>
                    <div className="Our-txt">
                      <h3>{card.titile}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                <div className="border-design">

                  <img src={img1} alt="img" />
                </div>
                  <h3> Intelligent learning</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    AI enabled personalized education through profiling,
                    learning pathways, recommendation engine, assignments &
                    personal feedbacks
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* 2 */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                <div className="border-design1">
                  <img src={img2} alt="img" />
                </div>
                  <h3> Single Window Access</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    programs and courses from pre-k to 12th grade, academic to
                    non-academic, domestic to international.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* 3 */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                <div className="border-design2">
                  <img src={img3} alt="img" />
                </div>
                  <h3> Immersive Learning</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    learning through AR, VR, 3D simulations & gamification
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* 4 */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                  <div className="border-design3">
                  <img src={img4} alt="img" />
                </div>
                  <h3>Intelligent teaching</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                  as per individual student's learning needs, course recommendations, auto lesson plans, scheduling, regulated lesson flows, auto Quiz, assessments & grading.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* 5 */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                  <div className="border-design4">
                  <img src={img5} alt="img" />
                </div>
                  <h3> Consolidated growth mapping</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                  For all programs on a single platform for 360° development visibility
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* 6 */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                  <div className="border-design5">
                  <img src={img6} alt="img" />
                </div>
                  <h3> Consolidated educational records</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                  All educational records including certificate, transcripts, and growth analysis will be available here.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurProFeature;
