import React from "react";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Ed2100.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "react-bootstrap/Card";
import image1 from "../assets/learning1.svg";
import image2 from "../assets/learning2.svg";
import image3 from "../assets/learning3.svg";
import image4 from "../assets/learning4.svg";
import image5 from "../assets/learning5.svg";


import "bootstrap/dist/css/bootstrap.min.css";

function Ed2100Slide() {

  const arrowbtn=()=>{
    <>

    <div>
    <button>Hello</button>
    </div>
    </>
  }
  return (
    <div className="secGap">   
    <section className="container-fluid ed2100-slide-section  ">
        <div className="container">
          <div className="content">
            <h3>
              <span>Our Learning</span> Partners
            </h3>
            <p>
              <strong>ed2100</strong> is an AI powered LXP (Learning Experience
              Platform) forschools, which offers highly personalized <br />
              learning and teachingenvironment with world class EdTech solutions
              at your fingertips
            </p>
          </div>
        </div>
    <div className="container py-4 px-4 ">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image1} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>JoinBotics</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image2} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Kubo</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image3} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>practically</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image4} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Furtados</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image5} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Whizqiz</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image5} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Whizqiz</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image5} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Whizqiz</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image5} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Whizqiz</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="Our-Learning_partners">
            <div className="img-box-slider">
              <Card.Img src={image5} />
            </div>
            <Card.Body className="card-txt">
              <Card.Title className="card-title">India</Card.Title>
              <Card.Text>Whizqiz</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
    </div>
  );
}

export default Ed2100Slide;
