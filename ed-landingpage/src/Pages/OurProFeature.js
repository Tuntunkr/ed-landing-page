import React, { useState } from "react";
import "../Styles/OurProduct.css";
import Accordion from "react-bootstrap/Accordion";
import img1 from "../assets/icons1.svg";
import img2 from "../assets/icons2.svg";
import img3 from "../assets/icons3.svg";
import img4 from "../assets/icons4.svg";
import img5 from "../assets/icons5.svg";
import img6 from "../assets/icons6.svg";
import Fade from "react-reveal/Fade";

function OurProFeature() {
  return (
    <>
      <div className="secGap">
        <section className="container-fluid feature-section ">
          <div className="container">
            <div
              className="content"
            >
              <h3>
                <span>ed2100 the</span> Products
              </h3>

              <p>
                <span>ed2100</span> is an AI powered LXP (Learning Experience
                Platform) forschools, which offers highly personalized <br />
                learning and teachingenvironment with world class EdTech
                solutions at your fingertips.
              </p>
            </div>
          </div>

          {/* desktop card here ... */}
          <section class="product-features-container">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <ul class="product-features">
                    <li>
                      <figure>
                        <div className="img-container">
                          <img src={img1} alt="Intelligent learning" />
                        </div>

                        <figcaption>
                          <h4>Intelligent learning</h4>
                          <p>
                            AI enabled personalized education through profiling,
                            learning pathways, recommendation engine,
                            assignments & personal feedbacks.
                          </p>
                        </figcaption>
                      </figure>
                    </li>

                    <li>
                      <figure>
                        <div className="img-container">
                          <img src={img2} alt="Intelligent learning" />
                        </div>

                        <figcaption>
                          <h4>
                            Single Window <br /> Access
                          </h4>
                          <p>
                            programs and courses from pre-k to 12th grade,
                            academic to non-academic, domestic to international.
                          </p>
                        </figcaption>
                      </figure>
                    </li>

                    <li>
                      <figure>
                        <div className="img-container">
                          <img src={img3} alt="Intelligent learning" />
                        </div>

                        <figcaption>
                          <h4>
                            Immersive <br /> Learning
                          </h4>
                          <p>
                            learning through AR, VR, 3D simulations &
                            gamification.
                          </p>
                        </figcaption>
                      </figure>
                    </li>

                    <li>
                      <figure>
                        <div className="img-container">
                          <img src={img4} alt="Intelligent learning" />
                        </div>

                        <figcaption>
                          <h4>Intelligent teaching</h4>
                          <p>
                            as per individual student's learning needs, course
                            recommendations, auto lesson plans, scheduling,
                            regulated lesson flows, auto Quiz, assessments &
                            grading.
                          </p>
                        </figcaption>
                      </figure>
                    </li>

                    <li>
                      <figure>
                        <div className="img-container">
                          <img src={img5} alt="Intelligent learning" />
                        </div>

                        <figcaption>
                          <h4>
                            Consolidated <br /> growth mapping
                          </h4>
                          <p>
                            For all programs on a single platform for 360°
                            development visibility.
                          </p>
                        </figcaption>
                      </figure>
                    </li>

                    <li>
                      <figure>
                        <div className="img-container">
                          <img src={img6} alt="Intelligent learning" />
                        </div>

                        <figcaption>
                          <h4>
                            Consolidated <br /> educational records
                          </h4>
                          <p>
                            All educational records including certificate,
                            transcripts, and growth analysis will be available
                            here.
                          </p>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile views card here ... */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                  <div className="border-design">
                    <img src={img1} alt="img" />
                  </div>
                  <h3 className="our-title"> Intelligent learning</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    AI enabled personalized education through profiling,
                    learning pathways, recommendation engine, assignments &
                    personal feedbacks.
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
                  <h3 className="our-title"> Single Window Access</h3>
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
                  <h3 className="our-title"> Immersive Learning</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    learning through AR, VR, 3D simulations & gamification.
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
                  <h3 className="our-title">Intelligent teaching</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    as per individual student's learning needs, course
                    recommendations, auto lesson plans, scheduling, regulated
                    lesson flows, auto Quiz, assessments & grading.
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
                  <h3 className="our-title"> Consolidated growth mapping</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    For all programs on a single platform for 360° development
                    visibility.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* 6 */}
          <div className="mobileViews-card">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="mobile-card1 ">
                  <div className="border-design5">
                    <img src={img6} alt="img" />
                  </div>
                  <h3 className="our-title">
                    {" "}
                    Consolidated educational records
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mobile-card1-mapra">
                    All educational records including certificate, transcripts,
                    and growth analysis will be available here.
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
