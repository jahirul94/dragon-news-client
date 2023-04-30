import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Marquee from "react-fast-marquee";

const NavigationBar = () => {
  const { user , logOut } = useContext(AuthContext);
  const handleLogout = () =>{
       logOut()
       .then(user =>{
        //  console.log(user);
       })
       .catch(error=>{
         console.log(error);
       })
  }
  return (
    <Container>
      <div className="d-flex my-4">
        <Button variant="danger">Breaking</Button>
        <Marquee pauseOnHover>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="my-2"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">             
               <Link className="me-2 text-decoration-none text-black" to="/">Home</Link>
               <Link className="me-2 text-decoration-none text-black" to='/about'>About</Link>
               <Link className="me-2 text-decoration-none text-black" to='/career'>Career</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">
                {user && (
                  <FaUserCircle
                    style={{ fontSize: "2rem", paddingTop: "4px" }}
                  ></FaUserCircle>
                )}
              </Nav.Link>
                {user ? (
                  <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
