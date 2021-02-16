import "./project.css";
import SingleProject from "../SingleProject/SingleProject";
import projects from "../../data/projects";

const Project = () => {
  window.scrollTo(0, 0);
  return (
    <div id="project-page">
      <div id="project-back">
        <div className="project-div">
          <h2 id="project-mar-h2">Projects</h2>
          <p>I love building projects while learning here are some of them</p>
          <hr />
        </div>
        {projects.map((project) => (
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
      <a id="wanttoseemore" href="https://github.com/SharjeelAbbas014">
        Want to see more?
      </a>
    </div>
  );
};

export default Project;
