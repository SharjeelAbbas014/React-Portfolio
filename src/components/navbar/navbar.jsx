import { Router, Link } from "@reach/router";
import "./navbar.css";

const Navbar = () => {
  return (
    <div id="navBar">
      <Link to="/">Sharjeel Abbas</Link>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
