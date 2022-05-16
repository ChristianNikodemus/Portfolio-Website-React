import React from "react";
import {} from "react-bootstrap";
import profilePhoto from "./img/Profile_photo.png";
import Fade from "react-reveal/Fade";

class Home extends React.Component {
  render() {
    return (
      <Fade bottom>
        <div>
          <div class="profile nav-buffer bg-color profile-container">
            <img
              src={profilePhoto}
              class="profile-photo"
              alt="A photograph of me"
            />

            <div class="profile-text_child">
              <h1>Hello World!</h1>

              <p>
                My name is Christian Nikodemus. I am a <span>web</span>{" "}
                developer from Toronto, Canada.
              </p>

              <a href="work.html">Take a look at some of my code projects!</a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Home;