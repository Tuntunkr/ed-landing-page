import React from "react";
import "./Nav.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navs() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div
            className="offcanvas offcanvas-start "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-end  ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end gap-4 flex-grow-1 pe-3">
                <li className="nav-item"  data-bs-dismiss="offcanvas"
                aria-label="Close"
                >
                  <Link to="/" className="list">
                    Home
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas"
                aria-label="Close">
                  <Link to="about" className="list" >
                    About us
                  </Link>
                </li>
                <li className="nav-item" ata-bs-dismiss="offcanvas"
                aria-label="Close">
                  <Link to="explore" className="list" >
                    Explore
                  </Link>
                </li>
                <li className="nav-item" ata-bs-dismiss="offcanvas"
                aria-label="Close">
                  <Link to="edtechpartner" className="list">
                    EdTech Partners
                  </Link>
                </li>
                <li className="nav-item" ata-bs-dismiss="offcanvas"
                aria-label="Close">
                  <Link to="media" className="list">
                    Media
                  </Link>
                </li>
                <li className="nav-item" ata-bs-dismiss="offcanvas"
                aria-label="Close">
                  <Link to="contact" className="list">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
              <button className="primary-btn">Explore</button>
        </div>
      </nav>

      
    </>
  );
}

export default Navs;
