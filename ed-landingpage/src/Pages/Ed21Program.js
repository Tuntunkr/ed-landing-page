import React from "react";
import "../Styles/Ed21Program.css";
import image1 from "../assets/ed211img1.png";
import image2 from "../assets/ed211img2.png";
import image3 from "../assets/ed211img3.png";
import image4 from "../assets/ed211img4.png";

function Ed21Program() {
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
                industry.<br/> Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
          <div class="slider-container">
            <div class="slider-item">
            <img src={image1} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image2} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image3} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image4} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image2} alt="slide_image" />
            </div>
            {/* <div class="slider-item">
            <img src={image1} alt="slide_image" />

            </div>
            <div class="slider-item">
            <img src={image2} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image3} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image4} alt="slide_image" />
            </div>
            <div class="slider-item">
            <img src={image2} alt="slide_image" />
            </div> */}
              
            </div>
        </section>
      </div>
    </>
  );
}

export default Ed21Program;
