import React from "react";
import github from "./img/github_icon.svg";
import linkedIn from "./img/linkedin_icon.png";
import instagram from "./img/instagram_icon.svg";
import { Nav } from "react-bootstrap";

class FooterNav extends React.Component {
  render() {
    return (
      <>
        <Nav className="justify-content-center nav-footer" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              href="https://github.com/ChristianNikodemus"
              target="blank"
            >
              <img src={github} alt="GitHub" class="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://www.linkedin.com/in/christiannikodemus/"
              target="blank"
            >
              <img
                src={linkedIn}
                height="30"
                width="30"
                alt="LinkedIn"
                class="icon"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://www.instagram.com/christiannikodemus/"
              target="blank"
            >
              <img src={instagram} alt="Instagram" class="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
      </>
    );
  }
}

export default FooterNav;
