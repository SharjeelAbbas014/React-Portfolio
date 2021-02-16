import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/home/home";
import Project from "./components/project/project";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <Project path="/projects" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
