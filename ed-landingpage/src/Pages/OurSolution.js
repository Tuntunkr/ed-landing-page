import React, { useState } from "react";
import "../Styles/OurSolution.css";
import Card from "react-bootstrap/Card";

function OurSolution() {
  const [cards] = useState([
    {
      titile: "Global Recognition for schools",
      description:
        "Become a globally recognized school, through best practices in school culture.",
      img: "https://imgur.com/X5iaSur.png",
    },
    {
      titile: "Alumni Management",
      description:
        "Help you students in career guidance through the school alumni.",
      img: "https://imgur.com/hRHvcl7.png",
    },
    {
      titile: "Teachers professional development",
      description:
        "Upgrade teaching skills of your Teachers to meet the needs of the 21st century classroom.",
      img: "https://imgur.com/5QawMl5.png",
    },
    {
      titile: "Proctoring solution",
      description: "Making online exams authentic through our proctoring tool.",
      img: "https://imgur.com/YlujlQl.png",
    },
    {
      titile: "Hobby Center & Tech Hubs",
      description:
        "Create Hobby Centers and Tech Hubs in your school for a holistic development of your students.",
      img: "https://imgur.com/hRHvcl7.png",
    },
    {
      titile: "College admissions",
      description:
        "Get complete guidance on college admissions for your students.",
      img: "https://imgur.com/gaWXc7p.png",
    },
  ]);
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
                industry.<br/> Lorem Ipsum has been the industry's.
              </p>
          </div>
        </div>
        <div className="container">
          <div className="feature-row">
            {cards.map((card, i) => (
              <Card className="Our-S-card">
                <div className="img-box">
                  <Card.Img src={card.img} />
                </div>
                <Card.Body className="card-txt">
                  <Card.Title className="card-title">{card.titile}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default OurSolution;
