// import logo from "./logo.svg";
import bgImage from "./img/DSC00280_16x9.jpg";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import FooterNav from "./FooterNav.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div
        className="App-main"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <Home id="#home" />
      </div>
      <About id="#about" />
      <Work id="#work" />
      <Contact />
      <FooterNav />
    </div>
  );
}

export default App;
