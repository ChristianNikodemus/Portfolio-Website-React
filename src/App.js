// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-main">
        <Home id="#home" />
      </div>
    </div>
  );
}

export default App;
