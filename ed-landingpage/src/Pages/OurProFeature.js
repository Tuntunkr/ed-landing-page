import React, { useState } from "react";
import "../Styles/OurProduct.css";

function OurProFeature() {
  const [cards] = useState([
    {
      titile: "Intelligent learning",
      description:
        "AI enabled personalized education through profiling, learning pathways, recommendation engine, assignments & personal feedbacks",
      img: "https://imgur.com/cpLPDe2.png",
      
    },
    {
      titile: "Single Window Access",
      description:
        "programs and courses from pre-k to 12th grade, academic to non-academic, domestic to international.",
      img: "https://imgur.com/Wy4lZpJ.png",
    },
    {
      titile: "Immersive Learning",
      description: "learning through AR, VR, 3D simulations & gamification",
      img: "https://imgur.com/VD9xTYA.png",
    },
    {
      titile: "Intelligent teaching",
      description:
        "as per individual student's learning needs, course recommendations, auto lesson plans, scheduling, regulated lesson flows, auto Quiz, assessments & grading.",
      img: "https://imgur.com/lVaEsXt.png",
    },
    {
      titile: "Consolidated growth mapping",
      description:
        "For all programs on a single platform for 360° development visibility",
      img: "https://imgur.com/qPk1xae.png",
    },
    {
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
              learning and teachingenvironment with world class EdTech solutions
              at your fingertips
            </p>
          </div>
        </div>

        <div className="container">
          <div className="feature-row">
            {cards.map((card, i) => (
              <div key={i} className="feature-card">
                <div className="img-box-f">
                  <img src={card.img} alt="imgs" />
                  <span></span>
                </div>
                <div className="Our-txt">
                  <h3>{card.titile}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
      
    </>
  );
}

export default OurProFeature;