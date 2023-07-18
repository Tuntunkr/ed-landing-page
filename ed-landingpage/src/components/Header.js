import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/Header.css";
import logo from "../assets/logo.svg";

// import "../Styles/Header.css";

function Headers() {
  return (
    <Navbar expand="lg" className="bg-body sticky">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mainhead "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          <div className="menulist">
            <Nav.Link href="/" className="list">Home</Nav.Link>
            <Nav.Link href="about" className="list">About us</Nav.Link>
            <Nav.Link href="explore" className="list">Explore</Nav.Link>
            <Nav.Link href="edtechpartner" className="list">EdTech Partners</Nav.Link>
            <Nav.Link href="media" className="list">Media</Nav.Link>
            <Nav.Link href="contact" className="list">Contact us</Nav.Link>
          </div>
            <button className="primary-btn">Explore</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;
