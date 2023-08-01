import React from "react";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Ed2100.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../assets/learning1.svg";
import image2 from "../assets/learning2.svg";
import image3 from "../assets/learning3.svg";
import image4 from "../assets/learning4.svg";
import image5 from "../assets/wheelogo.jpeg";
import tantalum from "../assets/tantalum_logo.jpeg";
import ipreplogo from "../assets/ipreplogo.jpeg";
import learning from "../assets/learnlanguages24Logo.jpeg";
import univeriety from "../assets/university.png";
import learnLaunge from "../assets/LearningChess_logo-svg.jpeg"
import eduvance from "../assets/eduvance.png"
import shinkan from "../assets/akashinkan-logo.svg"


import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-reveal";

function Ed2100Slide() {
  return (
    <div className="secGap">
      <Fade>
        <section className="container-fluid ed2100-slide-section  ">
          <div className="container">
            <div
              className="Our-L-Partners animate__animated animate__fadeInDown"
              data-wow-duration="2s"
            >
              <h3>
                <span>Our Learning</span> Partners
              </h3>
              <p>
                We curate and onboard world class domestic and international
                EdTech partners on our platform, to <br /> provide the best
                exposure to the schools, their teachers and the students.
              </p>
            </div>
          </div>

          <div className="container py-5 px-5 ">
            <div className="desktop-mod">
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                breakpoints={{
                  390: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {/* <SwiperSlide>
                <div className="Our-Learning_partners  ">
                
                  <div className="img-box-slider">
                    <img src={image1} alt="img" />
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Join </h3>
                    <p>India</p>
                  </div>
                 
                </div>
              </SwiperSlide> */}
                <SwiperSlide>
                  <div className="Our-Learning_partners">
                    <div className="img-box-slider">
                      <img src={image2} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Join Botics</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={image3} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">KUBO</h3>
                      <p>Denmark</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={image4} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Practically</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={image5} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Trait Fit</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 2nd slider  */}
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={tantalum} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Tantalum</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={ipreplogo} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">iDream</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={learnLaunge} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Learning chess</h3>
                      <p>HUNGARY</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={shinkan} alt="img" className="shinkan" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Shinkan</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={image5} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Wheebox</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={univeriety} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Univariety</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={image1} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">FSM</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={eduvance} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Eduvance</h3>
                      <p>India</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Our-Learning_partners ">
                    <div className="img-box-slider">
                      <img src={learning} alt="img" />
                    </div>
                    <div className="card-txts">
                      <h3 className="card-title">Learn Languages 24</h3>
                      <p>Germany</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Mobile vies element start here ... */}

          
        </section>
      </Fade>
    </div>
  );
}

export default Ed2100Slide;
