// import React from "react";
import "../Styles/Ed21Program.css";
import image1 from "../assets/ed211img1.png";
import image2 from "../assets/ed211img2.png";
import image3 from "../assets/ed211img3.png";
import image4 from "../assets/ed211img4.png";

import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Ed21Program() {
  const settings = {
    // dots: true,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="secGap">
        <section className="container-fluid ed2100-program-sections">
          <div className="container">
            <div className="content-edpropgram">
              <h3>
                <span>Ed2100 program </span> offerings
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
          {/*  */}

          <div className="container">
            <Slider {...settings} className="card-size">
              <div>
                <img src={image1} alt="slide_image" />
              </div>
              <div>
                <img src={image2} alt="slide_image" />
              </div>
              <div>
                <img src={image3} alt="slide_image" />
              </div>
              <div>
                <img src={image3} alt="slide_image" />
              </div>
              <div>
                <img src={image4} alt="slide_image" />
              </div>
              <div>
                <img src={image3} alt="slide_image" />
              </div>
            </Slider>
          </div>

          {/*  */}
        </section>
      </div>
    </>
  );
}

export default Ed21Program;
