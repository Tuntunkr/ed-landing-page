import React from "react";
import "../Styles/Contact.css";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <>
      <div className="secGap">
        <section className="container-fluid contact-section">
          <div className="container">
            <div
              className="Contact-content animate__animated animate__fadeInDown"
              data-wow-duration="2s"
            >
              <Fade top duration={2000}>
                <h3>
                  <span>Get in </span> touch
                </h3>
              </Fade>
              <Fade bottom duration={2000}>
                <p>
                  Explore the world of new possibilities in education with
                  ed2100!
                </p>
              </Fade>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-6">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name*
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div class="col-md-6 col-sm-6">
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-6">
                <label for="exampleFormControlInput1" class="form-label">
                  Email id*
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="col-md-6 col-sm-6">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Role at Company
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ui Developer"
                  aria-label="Ui Developer"
                />
              </div>
            </div>
            <Fade bottom duration={2000}>
            <div class="mt-4">
              <label for="exampleFormControlTextarea1" class="form-label">
                Type Message
              </label>
              <textarea
                class="form-control text-height"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Typing ..."
              ></textarea>
            </div>
                <div className="S-button">
                  <button type="submit" className="d-button">Send Message</button>
                </div>
              </Fade>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
