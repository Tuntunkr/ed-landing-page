import React from "react";
import "../Styles/Footer.css";
import logo from "../assets/logo.svg";
import phone from "../assets/phoneicons.svg";
import email from "../assets/emailicons.svg";
import { Link } from "react-router-dom";
import instalogo from "../assets/insicons.svg";

function Footer() {
  return (
    <>
     <section>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <div className="widget1">
                    <div className="logo">
                      <img src={logo} className="img-fluid" alt="" />
                    </div>
                    <p className="footdesrption">
                      Lorem Ipsum is simply dummy text of <br/> the printing and
                      typesetting
                    </p>

                    <div className="phoneicons">
                      <img src={phone} alt="icons" />
                      <p>Toll Free - 9123456700</p>
                    </div>
                    <div className="phoneicons">
                      <img src={email} alt="icons" />
                      <p>Email Id - ed2100@gmail.com</p>
                    </div>
                    <div className="socialLinks">
                      <ul>
                        <li>
                          <Link to="https://www.instagram.com/ed2100education/">
                            <img src={instalogo} alt="icons" />
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <img src={instalogo} alt="icons" />
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <img src={instalogo} alt="icons" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget3">
                  <h5>Useful Links</h5>
                  <ul>
                    <li>
                      <Link to="" className="footer-menu">
                        Privecy Policy >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Terms & Conditions >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Site Map >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        FAQs >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Help >>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget4">
                  <h5>Link Group 1</h5>
                  <ul>
                    <li>
                      <Link to="" className="footer-menu">
                        Lorem Ipsum Text >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Simply Dummy >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Text Printing And >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Typesetting >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Industry >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Discovered The >>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget4">
                  <h5>Link Group 1</h5>
                  <ul>
                    <li>
                      <Link to="" className="footer-menu">
                        Lorem Ipsum Text >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Simply Dummy >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Text Printing And >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Typesetting >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Industry >>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="footer-menu">
                        Discovered The >>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
        </footer>
      </section>

     
          
          <hr></hr>
          <div className="copyRightArea">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center copyright">
                  <p>
                    &copy; Copyright 2022 ED2100 PVT. LTD .All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
       
    </>
  );
}

export default Footer;
