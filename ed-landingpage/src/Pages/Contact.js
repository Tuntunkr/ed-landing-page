import React from "react";
import Form from "react-bootstrap/Form";
import "../Styles/Contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <>
     <div className="secGap">  
      <section className="container-fluid contact-section">
        <div className="container">
          <div className="Contact-content">
            <h3>
              <span>Get in </span> touch
            </h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br/> Lorem Ipsum has been the industry's.
              </p>
          </div>
          <div className="Contact-row">

            <Form >
              <Row className="container">
                <Col xs={12} sm={12} md={6}>
                  <div>
                    <label for="mce-FNAME">
                      First Name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      placeholder="Enter First Name"
                      className="form-control"
                      id="mce-FNAME"
                      required
                    />
                    <span
                      id="mce-FNAME-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                </Col>
              
                <Col>
                  <div>
                  <label for="mce-FNAME">
                      Last Name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      placeholder="Enter Last Name"
                      className="form-control"
                      id="mce-LNAME"
                    />
                    <span
                      id="mce-LNAME-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row className="container">
                <Col xs={12} sm={12} md={6}>
                  <div>
                    <label for="mce-FNAME">
                    Email id <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      placeholder="Enter email Id"
                      className="form-control"
                      id="mce-FNAME"
                      required
                    />
                    <span
                      id="mce-FNAME-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                </Col>
              
                <Col>
                  <div>
                  <label for="mce-FNAME">
                  Your Role at Company <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      placeholder="Enter School name"
                      className="form-control"
                      id="mce-LNAME"
                    />
                    
                   
                  </div>
                </Col>
              </Row>
              {/*  */}
              <br/>

              
              <br />
              <Row>
              <Col md={12}>

                <div className="textareafield">
                  <label for="mce-REQUIREMEN">Type Message</label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    value=""
                    name="comment"
                    className="text-area"
                    placeholder="Enter here"
                    id="mce-REQUIREMEN"
                  ></textarea>
                  
                </div>
              </Col>
              </Row>
              <div className="clear btn1">
                <button className="d-button">Send Message</button>
              </div>
            </Form>
          </div>
        </div>
        <div className="container">
        </div>
      </section>
      </div>
    </>
  );
}

export default Contact;
