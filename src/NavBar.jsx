import React, { useState } from "react";
import logo from "./img/logo_v1.png";
import { Container, Navbar, Nav } from "react-bootstrap";

const navLinks = [
  { navLinkId: "Home", scrollToId: "homeContainer" },
  { navLinkId: "About", scrollToId: "aboutContainer" },
  { navLinkId: "Work", scrollToId: "workContainer" },
  { navLinkId: "Contact", scrollToId: "contactContainer" },
];

const NavLink = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth", // gives an ease-in-out effect to scroll
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? "activeClass" : ""}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

const Navigation = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");

  return (
    <Nav
      className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3"
      style={{ maxHeight: "200px" }}
      navbarScroll
    >
      {navLinks.map(({ navLinkId, scrollToId }) => (
        <Nav.Link>
          <NavLink
            navLinkId={navLinkId}
            scrollToId={scrollToId}
            activeNavLinkId={activeNavLinkId}
            setActiveNavLinkId={setActiveNavLinkId}
          />
        </Nav.Link>
      ))}
    </Nav>
  );
};

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
              <Navigation />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
