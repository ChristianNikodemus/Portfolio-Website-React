import React from "react";
import logo from "./img/logo_v1.png";
import { Container, Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar fixed="top" bg="light" expand="lg">
          <Container fluid style={{ maxWidth: "1600px" }}>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="300"
                height="auto"
                className="d-inline-block align-top"
                alt="Christian Nikodemus logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3"
                style={{ maxHeight: "200px" }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
