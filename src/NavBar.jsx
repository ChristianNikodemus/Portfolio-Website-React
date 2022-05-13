import React from "react";
import logo from "./img/logo_v1.png";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar fixed="top" bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="300"
                height="auto"
                className="d-inline-block align-top"
                alt="Christian Nikodemus logo"
              />
            </Navbar.Brand>
            <Nav className="me-2">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
