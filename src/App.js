// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-main">
        <Home id="#home" />
      </div>
      <About id="#about" />
      <Work />
    </div>
  );
}

export default App;
