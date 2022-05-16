import React from "react";
import { Button, Table } from "react-bootstrap";
import { Fade } from "react-reveal";

class About extends React.Component {
  render() {
    return (
      <>
        <h1 className="title_banner">About Me</h1>

        <div className="about-container">
          <div className="profile_about">
            <Fade bottom>
              <p className="about-description">
                My name is Christian Nikodemus. I am passionate about creating
                front-end development that connects with people. My background
                is in media and communications. Through this, I have become well
                equipped with thinking about the bigger picture of how front-end
                development can convey a message and describe its own
                personality. I am a communicator at heart with a technical mind.
                As well, I am proficient with the Adobe Suite programs. Outside
                of work I enjoy getting outside, camping, and living an active
                lifestyle . I love to travel and see new parts of the world and
                find ways to help contribute to creating a better planet. I am a
                creative person and enjoy photography and playing guitar, I can
                also play the piano and ukulele. I hope that we can enjoy
                getting to know each other more!
              </p>

              <Button
                variant="outline-primary"
                href="https://github.com/ChristianNikodemus"
                target="_blank"
                className="about-github"
              >
                Check Out my GitHub profile!
              </Button>

              {/* Table of Experience */}

              <h2>Experience Level</h2>

              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Skills</th>
                    <th>Years of Experience</th>
                    <th>Level of Expertise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML</td>
                    <td>3</td>
                    <td>Intermediate</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>3</td>
                    <td>Intermediate</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>2</td>
                    <td>Beginner</td>
                  </tr>
                  <tr>
                    <td>React JS</td>
                    <td>2</td>
                    <td>Beginner</td>
                  </tr>
                </tbody>
              </Table>
            </Fade>
          </div>
        </div>
      </>
    );
  }
}

export default About;
