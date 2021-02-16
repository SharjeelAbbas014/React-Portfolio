import "./home.css";
import { React, useEffect, useState } from "react";
import { Link } from "@reach/router";
import guy1Img from "../../imgs/hero-guy-3.png";
import OneSkill from "../oneSkill/oneSkill";
import SingleProject from "../SingleProject/SingleProject";
import projects from "../../data/projects";
import ChatNow from "../ChatNow/ChatNow";
import skills from "../../data/skills.js";
const Home = () => {
  const [showProject, setShowProject] = useState({ show: true, id: 0 });
  const [showChat, setShowChat] = useState(false);
  const turnOff = () => {
    setShowChat(false);
  };
  console.log(skills);
  let mainProj = projects.slice(0, 3);
  return (
    <div>
      {showChat === true ? <ChatNow turnOff={turnOff} /> : null}
      <div id="topPart">
        <div id="content">
          <h1>Sharjeel Abbas</h1>
          <h2>
            Full Stack Developer, Love Building and learn newest and greatest
            Tech!
          </h2>
          <button onClick={() => setShowChat(true)}>LET'S TALK</button>
        </div>
      </div>
      <div id="hero-back">
        <img src={guy1Img} alt="" />
        <div id="cut-out"></div>
      </div>
      <div id="tech-back">
        <h2>Tech I love to use</h2>
        <p>
          I love learning new and greatest technology here's some close to my
          heart
        </p>
        <hr />
        <div id="outer-tech">
          <div className="one-tech-line">
            <OneSkill url={skills[0]}></OneSkill>
          </div>
          <div className="one-tech-line">
            <OneSkill url={skills[1]}></OneSkill>
            <OneSkill url={skills[2]}></OneSkill>
          </div>
          <div className="one-tech-line">
            <OneSkill url={skills[3]}></OneSkill>
            <OneSkill url={skills[4]}></OneSkill>
            <OneSkill url={skills[5]}></OneSkill>
          </div>
          <div className="one-tech-line">
            <OneSkill url={skills[6]}></OneSkill>
            <OneSkill url={skills[7]}></OneSkill>
          </div>
          <div className="one-tech-line">
            <OneSkill url={skills[8]}></OneSkill>
          </div>
        </div>

        <div id="project-back">
          <h2>Projects</h2>
          <p>I love building projects while learning here are some of them</p>
          <hr />

          {mainProj.map((project) => (
            <SingleProject
              key={project.id}
              id={project.id}
              name={project.name}
              tech={project.techs}
              image={project.icon}
              pos={project.pos}
              colors={project.colors}
              details={project.details}
              projimg={project.projimg}
              link={project.github}
            ></SingleProject>
          ))}
        </div>
        <Link id="showmoreproj" to="/projects">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Home;
