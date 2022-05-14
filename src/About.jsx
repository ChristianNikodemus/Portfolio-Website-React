import React from "react";
import { Button, Table } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <div className="profile_about">
        <h1>About Me</h1>
        <p>
          My name is Christian Nikodemus. I enjoy getting outside, camping, and
          living an active lifestyle. I love to travel and see new parts of the
          world, and find ways to help contribute to creating a better planet. I
          am a creative person and enjoy photography and playing guitar, I can
          also play the piano and ukelele. I hope we can enjoy getting to know
          each other more!
        </p>

        <Button
          variant="outline-primary"
          href="https://github.com/ChristianNikodemus"
          target="_blank"
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
      </div>
    );
  }
}

export default About;
