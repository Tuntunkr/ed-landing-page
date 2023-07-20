import React from "react";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Ed2100.css"
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

function Ed2100Slide() {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

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
          <div className="Our-L-Partners">
            <h3>
              <span>Our Learning</span> Partners
            </h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br/> Lorem Ipsum has been the industry's.
              </p>
          </div>
        </div>

        {/*  */}

        {/*  */}
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
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image1} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image2} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image3} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image4} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image5} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image1} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image1} />
            </div>
            <div className="card-txts">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Our-Learning_partners">
            <div className="img-box-slider">
              <img src={image1} />
            </div>
            <div className="card-txt">
              <h3 className="card-title">India</h3>
              <p>JoinBotics</p>
            </div>
          </div>
          
        </SwiperSlide>
        
      </Swiper>
    </div>
    </section>
    </div>
  );
}

export default Ed2100Slide;
