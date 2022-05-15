import React from "react";
import {} from "react-bootstrap";
import profilePhoto from "./img/Profile_photo.png";

class Home extends React.Component {
  render() {
    return (
      <div class="profile nav-buffer bg-color">
        <img
          src={profilePhoto}
          class="profile_photo"
          alt="A photograph of me"
        />
        <h1>Hello World!</h1>
        <p>
          My name is Christian Nikodemus. I am a <span>web</span> developer from
          Toronto, Canada.
        </p>
        <a href="work.html">Take a look at some of my code projects!</a>
      </div>
    );
  }
}

export default Home;
