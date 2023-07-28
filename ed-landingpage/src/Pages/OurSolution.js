import React from "react";
import "../Styles/OurSolution.css";
import Card from "react-bootstrap/Card";
import image1 from "../assets/global-img.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image6 from "../assets/helpimg.png";
import image5 from "../assets/img5.png";
// mobile image
// import img1 from "../assets/Our_S_img1.png";
import Fade from 'react-reveal/Fade';


import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

function OurSolution() {
  return (
    <>
      <div className="secGap">
        <section className="container-fluid Our-L-section">
          <div className="container">

          <div className="content-edpropgram ">
            
              <h3>
                <span>Our  </span> Solutions
              </h3>
            
              <p>
                ed2100 provides one-stop-shop learning and teaching solutions to
                schools, bringing the best global programs <br/> on a single platform
                at the best prices. This helps schools in hassle free decision
                making in quick time.
              </p>
            </div>
          </div>
          <div className="container">
         
            <div className="Our-S-row">
            
              <Card className="Our-S-card ">
                <div className="img-box">
                  <Card.Img src={image1} />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Global Recognition <br/> for schools
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Become a globally recognized school, through best
                      practices in school culture.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="Our-S-card ">
                <div className="img-box">
                  <Card.Img src={image2} />
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
            

              <Card className="Our-S-card ">
                <div className="img-box">
                  <Card.Img src={image3} />
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
              <Card className="Our-S-card ">
                <div className="img-box">
                  <Card.Img src={image4} />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Proctoring <br/> solution
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      description: "Making online exams authentic through our
                      proctoring tool.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="Our-S-card ">
                <div className="img-box">
                  <Card.Img src={image6} />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    Hobby Center <br/> & Tech Hubs
                  </Card.Title>
                  <Card.Text>
                    <p className="card-mapra">
                      Create Hobby Centers and Tech Hubs in your school for a
                      holistic development of your students.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

            

              <Card className="Our-S-card ">
                <div className="img-box">
                  <Card.Img src={image5} />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">
                    College <br/> admissions
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

          <div className="container ">
            <div className="mobile-Our-S-section">
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={20}
                // slidesPerView={1.5}
                navigation
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
              >
                <SwiperSlide>
                  <Card className="Our-S-card ">
                    <div className="img-box">
                      <Card.Img src={image1} />
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
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Our-S-card ">
                    <div className="img-box">
                      <Card.Img src={image2} />
                    </div>
                    <Card.Body className="card-txt">
                      <Card.Title className="card-title">
                        Alumni <br /> Management
                      </Card.Title>
                      <Card.Text>
                        <p className="card-mapra">
                          Help you students in career guidance through the
                          school alumni.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Our-S-card ">
                    <div className="img-box">
                      <Card.Img src={image6} />
                    </div>
                    <Card.Body className="card-txt">
                      <Card.Title className="card-title">
                        Teachers professional  <br /> development
                      </Card.Title>
                      <Card.Text>
                        <p className="card-mapra">
                          Upgrade teaching skills of your Teachers to meet the
                          needs of the 21st century classroom.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Our-S-card ">
                    <div className="img-box">
                      <Card.Img src={image4} />
                    </div>
                    <Card.Body className="card-txt">
                      <Card.Title className="card-title">
                        Proctoring  <br /> solution
                      </Card.Title>
                      <Card.Text>
                        <p className="card-mapra">
                          description: "Making online exams authentic through
                          our proctoring tool.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Our-S-card ">
                    <div className="img-box">
                      <Card.Img src={image3} />
                    </div>
                    <Card.Body className="card-txt">
                      <Card.Title className="card-title">
                        Hobby Center  <br /> & Tech Hubs
                      </Card.Title>
                      <Card.Text>
                        <p className="card-mapra">
                          Create Hobby Centers and Tech Hubs in your school for
                          a holistic development of your students.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                {/* 2nd slider  */}
                <SwiperSlide>
                  <Card className="Our-S-card ">
                    <div className="img-box">
                      <Card.Img src={image5} />
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurSolution;
