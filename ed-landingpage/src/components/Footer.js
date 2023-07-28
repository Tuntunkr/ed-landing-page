import React from "react";
import "../Styles/Footer.css";
import logo from "../assets/logo.svg";
import phone from "../assets/call.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";
import instalogo from "../assets/instagram.svg";
import Linkdin from "../assets/linkedin-square.svg";
import facebooks from "../assets/facebook-square.svg";
import locat from "../assets/distance.svg"


function Footer() {
  return (
    <>
      <section classNameName="secGap">
        {/* <footer classNameName="footer">
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col-md-10">
                <div>
                  <div classNameName="widget1">
                    <div classNameName="footer-logo">
                      <img src={logo} classNameName="img-fluid" alt="" />
                    </div>
                    <p classNameName="footdesrption">
                      Lorem Ipsum is simply dummy text of <br/> the printing and
                      typesetting
                    </p>

                    <div classNameName="phoneicons">
                      <img src={phone} alt="icons" />
                      <p>Toll Free - (+91)  7428900818</p>
                    </div>
                    <div classNameName="phoneicons">
                      <img src={email} alt="icons" />
                      <p>Email Id - info@ed2100.com</p>
                    </div>
                    <div classNameName="socialLinks">
                      <ul>
                        <li>
                          <Link to="https://www.facebook.com/ed2100education">
                            <img src={facebook} alt="icons" />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/ed2100education/">
                            <img src={instalogo} alt="icons" />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.linkedin.com/company/ed2100education/">
                            <img src={Linkdin} alt="icons" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="col-md-2 footer-menu-title">
                <div classNameName="widget3">
                  <h5>Useful Links</h5>
                  <ul>
                    <li>
                      <Link to="https://www.ed2100.com/privacy.html" classNameName="footer-menu">
                        Privacy Policy 
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.ed2100.com/term.html" classNameName="footer-menu">
                        Terms & Conditions 
                      </Link>
                    </li>
                  
                    <li>
                      <Link to="" classNameName="footer-menu">
                        Help 
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
         
        </footer> */}

        <footer className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ul className="footNav">
                  <li>
                    <Link to="/term.html">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/privacy.html">Privacy Policy</Link>
                  </li>
                </ul>
                <div className="footer-nav">
                  <span>
                    <a
                      href="https://www.instagram.com/ed2100education/"
                      
                    >
                      <img src={instalogo} alt="icon" />
                    </a>
                  </span>
                  <span className="">
                    <a
                      href="https://www.facebook.com/ed2100education"
                      
                    >
                      <img src={facebooks} alt="icon" />
                    </a>
                  </span>
                  <span className="">
                    <a
                      href="https://www.linkedin.com/company/ed2100education"
                      
                    >
                      <img src={Linkdin} alt="icon" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-3 text-right">
                <div className="footer-nav">
                  <div className="address">
                    <Link to="#"  className="ahover">
                      <img src={phone} alt="icon" />
                    </Link>
                    <span> Phone +91 7428900818</span> 
                  </div>
                  
                  <div className="mail-btn">
                    <div className="address">
                      <a href="#" >
                        <img src={mail} alt="icon" />
                      </a>
                     <span> Email Id - info@ed2100.com</span> 
                    </div>
                  </div>
                  <div>
                    <div className="address">
                      <a href="#" >
                        <img src={locat} alt="icon" />
                      </a>
                      <span> B-133, Logix Technova, Sector-132,</span>  
                      {/* <br /> */}
                      Noida, Uttar Pradesh - 201301
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="copyright">
                  <p className="footText mb-0">
                    Copyright © 2023 21st Education Pvt. Ltd. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      
    </>
  );
}

export default Footer;
