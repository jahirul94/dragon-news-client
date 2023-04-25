import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center my-4">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex my-4">
        <Button variant="danger">Danger</Button>
        <Marquee pauseOnHover>
           Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
       
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="my-2">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                   <Button variant="secondary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



    </Container>
  );
};

export default Header;
