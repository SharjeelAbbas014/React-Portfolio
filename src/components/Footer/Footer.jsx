import "./Footer.css";
import linkedin from "../../imgs/linkedin.webp";
import github from "../../imgs/github.png";
import twitter from "../../imgs/twitter.png";
const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-mask"></div>
      <h2>Learn More About me from these Socials</h2>
      <div id="socials">
        <a href="https://www.linkedin.com/in/sharjeelabbasdev/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/SharjeelAbbas014" target="_blank">
          <img src={github} alt="" />
        </a>
        <a href="https://twitter.com/Sharjee31380667">
          <img src={twitter} alt="" />
        </a>
      </div>
      <p id="madewith">Made with ❤ and React</p>
    </div>
  );
};

export default Footer;
