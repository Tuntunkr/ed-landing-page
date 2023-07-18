import React from "react";
import './App.css';
// import "./Gelements.css"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from "./components/Header";
import HeroSec from "./components/HeroSec";
import AboutUs from "./Pages/AboutUs";
import EdtechPartners from "./Pages/EdtechPartners";
import Media from "./Pages/Media";
// import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import OurProFeature from "./Pages/OurProFeature";
import Nav from "./components/Nav";





function App() {
  return (
    <div>
      {/* <Headers /> */}
      <Nav />
      <Routes>
      {/* <HeroSec /> */}
				<Route path="/" element={<HeroSec/>} />
				<Route path= "/about" element={<AboutUs />} />
				<Route path= "/explore" element={<OurProFeature/>} />
				<Route path="/edtechpartner" element={<EdtechPartners/>} />
				<Route path="/media" element={<Media/>} />
				<Route path="/contact" element={<Contact/>} />
				{/* <Route path="/login" element={<Login/>} /> */}
				
			</Routes>
     
     <Footer />
    </div>
  );
}

export default App;
