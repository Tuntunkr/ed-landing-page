// import React from "react";
import "../Styles/Ed21Program.css";
import Scholars from "../assets/1imgscholar.png";
import Technologies from "../assets/1imgtechnologies.png";
import higherOrder from "../assets/1imgH-O-Thinkers.png";
import Global from "../assets/Global1-img.png";
import Enterpre from "../assets/1imgEntrepreneurs.png";
import visual from "../assets/1imgVisual-Artist.png";
import Sportsmen from "../assets/1imgSportsmen.png";
import Goodablepeople from "../assets/1imgGood & able people.png";
import nature from "../assets/1imgNature lovers.png";
import special from "../assets/1imgSpecail-education.png";
import testprep from "../assets/1imgTest-prep.png";
import international from "../assets/1imgInternational-exam.png";
import social from "../assets/1imgSocial-poeple.png";
import Media from "../assets/1imgMedia.png";
import Arena from "../assets/1imgArena.png";

import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          spaceBetween: 30,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          spaceBetween: 30,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          spaceBetween: 10,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          spaceBetween: 10,
          slidesToScroll: 1,
        },
      },
    ],
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
      <Fade duration={2000}>
        <div className="secGap">
          <section className="container-fluid ed2100-program-sections">
            <div className="container">
              <div className="content-edpropgram ">
                <h3>
                  <span>ed2100 program </span> offerings
                </h3>

                <p>
                  We promote holistic development in students, building their
                  social, emotional, physical and <br /> intellectual health.
                  This helps boost the child's confidence for the 21st century
                  environment.
                </p>
              </div>
            </div>

            {/*  */}
            <div className="desktop-view">
              <Slider {...settings}>
                {/* 1card img */}
                <div className="slide_image">
                  <img src={Scholars} alt="slide_image" />
                  <p className="ed-p-title">Scholars</p>
                </div>

                {/* 2 ND image */}
                <div className="slide_image">
                  <img src={Technologies} alt="slide_image" />
                  <p className="ed-p-title">Technologies</p>
                </div>

                {/* 3Rd image */}
                <div className="slide_image">
                  <img src={higherOrder} alt="slide_image" />
                  <p className="ed-p-title">Higher Order Thinkers</p>
                </div>
                <div className="slide_image">
                  <img src={Global} alt="slide_image" />
                  <p className="ed-p-title">Global Citizens</p>
                </div>

                {/* 4th Image */}
                <div className="slide_image">
                  <img src={visual} alt="slide_image" />
                  <p className="ed-p-title">Visual Artist</p>
                </div>
                {/* 5th image */}
                <div className="slide_image">
                  <img src={Enterpre} alt="slide_image" />
                  <p className="ed-p-title">Entrepreneurs</p>
                </div>
                {/* 6th image */}
                <div className="slide_image">
                  <img src={Sportsmen} alt="slide_image" />
                  <p className="ed-p-title">Sportsmen</p>
                </div>
                {/* 7th image */}
                <div className="slide_image">
                  <img src={Goodablepeople} alt="slide_image" />
                  <p className="ed-p-title">Good & able people</p>
                </div>
                {/* 8th image */}
                <div className="slide_image">
                  <img src={nature} alt="slide_image" />
                  <p className="ed-p-title">Nature Lovers</p>
                </div>
                {/* 9th image */}
                <div className="slide_image">
                  <img src={special} alt="slide_image" />
                  <p className="ed-p-title">Special education students</p>
                </div>
                {/* 10th image */}
                <div className="slide_image">
                  <img src={testprep} alt="slide_image" />
                  <p className="ed-p-title">Test Prep seekers</p>
                </div>
                {/* 11th image */}
                <div className="slide_image">
                  <img src={international} alt="slide_image" />
                  <p className="ed-p-title">International exams seekers</p>
                </div>
                {/* 12th image */}
                <div className="slide_image">
                  <img src={social} alt="slide_image" />
                  <p className="ed-p-title">Social people</p>
                </div>
                {/* 13th image */}
                <div className="slide_image">
                  <img src={Media} alt="slide_image" />

                  <p className="ed-p-title">Media personalities</p>
                </div>
                {/* 13th image */}
                <div className="slide_image">
                  <img src={Arena} alt="slide_image" />
                  <p className="ed-p-title">Arena</p>
                </div>
              </Slider>
            </div>

            {/* Mobile views section start here ...  */}
          </section>
        </div>
      </Fade>
    </>
  );
}

export default Ed21Program;
