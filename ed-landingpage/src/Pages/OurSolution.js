import React, { useState } from "react";
import "../Styles/OurSolution.css";
import Card from "react-bootstrap/Card";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";
// mobile image
import img1 from "../assets/Our_S_img1.png"

function OurSolution() {
  return (
    <>
      <div className="secGap">
        <section className="container-fluid Our-L-section">
          <div className="container">
            <div className="Our-Solution-title">
              <h3>
                <span>Our</span> Solutions
              </h3>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="Our-S-row">
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={image1} />
                </div>
                <div className="secons-card-image">
                  <img src={img1} alt="mobile-img" />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Global Recognition for schools
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Become a globally recognized school, through best
                      practices in school culture.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={image2} />
                </div>
                <div className="secons-card-image">
                  <img src={img1} alt="mobile-img" />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Alumni <br /> Management
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Help you students in career guidance through the school
                      alumni.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={image3} />
                </div>
                <div className="secons-card-image">
                  <img src={img1} alt="mobile-img" />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Teachers professional development
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Upgrade teaching skills of your Teachers to meet the needs
                      of the 21st century classroom.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={image4} />
                </div>
                <div className="secons-card-image">
                  <img src={img1} alt="mobile-img" />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Proctoring solution
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      description: "Making online exams authentic through our
                      proctoring tool.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={image3} />
                </div>
                <div className="secons-card-image">
                  <img src={img1} alt="mobile-img" />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Hobby Center & Tech Hubs
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Create Hobby Centers and Tech Hubs in your school for a
                      holistic development of your students.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={image5} />
                </div>
                <div className="secons-card-image">
                  <img src={img1} alt="mobile-img" />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    College admissions
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Get complete guidance on college admissions for your
                      students.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurSolution;
