import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Ed21Program.css";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import image1 from "../assets/ed211img1.png";
import image2 from "../assets/ed211img2.png";
import image3 from "../assets/ed211img3.png";
import image4 from "../assets/ed211img4.png";

// import './styles.css';
// import 'swiper/swiper.min.css'
// import required modules
import { Autoplay } from "swiper/modules";

function Ed21Program() {
  return (
    <>
      <section className="container-fluid ed2100-program-sections">
        <div className="container">
          <div className="content">
            <h3>
              <span>Ed2100 program </span> offerings
            </h3>
            <p>
              <strong>ed2100</strong> is an AI powered LXP (Learning Experience
              Platform) forschools, which offers highly personalized <br />{" "}
              learning and teachingenvironment with world class EdTech solutions
              at your fingertips
            </p>
          </div>
        </div>
        <div class="slider-container">
            <div class="slider-item">

        <Swiper
          // slidesPerView={4}
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
        
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
        </Swiper>
            </div>
          </div>
      </section>
    </>
  );
}

export default Ed21Program;
