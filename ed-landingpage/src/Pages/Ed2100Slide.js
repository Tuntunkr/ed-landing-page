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
import image5 from "../assets/learning5.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-reveal";

function Ed2100Slide() {
  return (
    <div className="secGap">
      <section className="container-fluid ed2100-slide-section  ">
      <Fade>
        <div className="container">
          <div className="Our-L-Partners animate__animated animate__fadeInDown" data-wow-duration="2s">
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
          <div className="desktop-mode animate__animated animate__fadeInUp" data-wow-duration="2s">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="Our-Learning_partners  ">
                  <div className="img-box-slider">
                    <img src={image1} alt="img" />
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Furtados</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image2}  alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">JoinBotics</h3>
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
                    <h3 className="card-title">Kubo</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image4}  alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">practically</h3>
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
                    <h3 className="card-title">Whizqiz</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 2nd slider  */}
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image1} alt="img" />
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Furtados</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image2}  alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">JoinBotics</h3>
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
                    <h3 className="card-title">Kubo</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image4} alt="img" />
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">practically</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image5}  alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Whizqiz</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Mobile vies element start here ... */}

        <div className="mobile-views-mode">
          <div className="container ">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              // spaceBetween={30}
              slidesPerView={2.5}
              centeredSlides={true}
              navigation
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image1}  alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Furtados</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image2} alt="img"/>
                  </div>
                  <div className="card-txts"> 
                    <h3 className="card-title">JoinBotics</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image3} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Kubo</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image4} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">practically</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image5} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Whizqiz</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              {/* 2nd slider  */}
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image1} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Furtados</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image2} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">JoinBotics</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image3} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Kubo</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image4} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">practically</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Our-Learning_partners ">
                  <div className="img-box-slider">
                    <img src={image5} alt="img"/>
                  </div>
                  <div className="card-txts">
                    <h3 className="card-title">Whizqiz</h3>
                    <p>India</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        </Fade>
      </section>
    </div>
  );
}

export default Ed2100Slide;
