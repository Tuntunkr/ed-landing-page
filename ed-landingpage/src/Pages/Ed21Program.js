// import React from "react";
import "../Styles/Ed21Program.css";
import image1 from "../assets/ed211img1.png";
import image2 from "../assets/ed211img2.png";
import image3 from "../assets/ed211img3.png";
import image4 from "../assets/ed211img4.png";
import image5 from "../assets/testPre image.svg";

import React from "react";
import Slider from "react-slick";

function Ed21Program() {
  const settings = {
    // dots: true,
    spaceBetween: 30,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  // Mobile views
  const setting = {
    // dots: true,
    spaceBetween: 30,
    infinite: true,
    slidesToShow: 2,
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
            <div className="content-edpropgram animate__animated animate__fadeInDown" data-wow-duration="2s">
              <h3>
                <span>ed2100 program </span> offerings
              </h3>
              <p className="animate__animated animate__fadeInUp" data-wow-duration="2s">
                We promote holistic development in students, building their
                social, emotional, physical and <br /> intellectual health. This
                helps boost the child's confidence for the 21st century
                environment.
              </p>
            </div>
          </div>

          {/*  */}
          <div className="desktop-views">
            <Slider {...settings}>
              {/* 1card img */}
              <div className="slide_image">
                <img src={image4} alt="slide_image" />
                <p className="ed-p-title">Scholars</p>
              </div>

              {/* 2 ND image */}
              <div className="slide_image">
                <img src={image3} alt="slide_image" />
                <p className="ed-p-title">Technologies</p>
              </div>

              {/* 3Rd image */}
              <div className="slide_image">
                <img src={image2} alt="slide_image" />
                <p className="ed-p-title">Performing Artists</p>
              </div>

              {/* 4th Image */}
              <div className="slide_image">
                <img src={image1} alt="slide_image" />
                <p className="ed-p-title">Sportsmen</p>
              </div>
              {/* 5th image */}
              <div className="slide_image">
                <img src={image5} alt="slide_image" />
                <p className="ed-p-title">Test Prep seekers</p>
              </div>
              
            </Slider>
          </div>

          {/* Mobile views section start here ...  */}

          <div className="mobile-views">
            <Slider {...setting}>
              {/* 1card img */}
              <div className="slide_image">
                <img src={image4} alt="slide_image" />
                <p className="ed-p-title">Scholars</p>
              </div>

              {/* 2 ND image */}
              <div className="slide_image">
                <img src={image3} alt="slide_image" />
                <p className="ed-p-title">Technologies</p>
              </div>

              {/* 3Rd image */}
              <div className="slide_image">
                <img src={image2} alt="slide_image" />
                <p className="ed-p-title">Performing Artists</p>
              </div>

              {/* 4th Image */}
              <div className="slide_image">
                <img src={image4} alt="slide_image" />
                <p className="ed-p-title">Sportsmen</p>
              </div>
              {/* 5th image */}
              <div className="slide_image">
                <img src={image5} alt="slide_image" />
                <p className="ed-p-title">Test Prep seekers</p>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}

export default Ed21Program;
