// import logo from "./logo.svg";
import bgImage from "./img/DSC00280_16x9.jpg";
import "./App.css";

// Components
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import FooterNav from "./FooterNav.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavBar />
        <div
          id="home"
          className="App-main"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        >
          <Home />
        </div>
        <About />
        <Work />
        <Contact />
        <FooterNav />
      </div>
    </ParallaxProvider>
  );
}

export default App;
