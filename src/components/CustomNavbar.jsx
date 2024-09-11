import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand className="Brand">śikṣā</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <ScrollLink to="home" smooth={true} duration={300}>Home</ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink to="feature" smooth={true} duration={300}>Feature</ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink to="about" smooth={true} duration={300}>About</ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink to="team" smooth={true} duration={300}>Our Teachers</ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink to="courses" smooth={true} duration={300}>Courses</ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink to="testimonial" smooth={true} duration={300}>Reviews</ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink to="contact" smooth={true} duration={300}>Contact</ScrollLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

