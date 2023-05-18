import React from "react";
import Project from "./Project";
import { getProjects } from "../../service/ProjectService";
import "./project.css";

export default function Projects() {
  return (
    <div id="Projects" className="projects">
      <h1>Projects</h1>
      <div className="container-fluid">
        <div className="row">
          {getProjects().map((project) => {
            return (
              <div className="col">
                <Project
                  title={project.title}
                  info={project.info}
                  img={project.img}
                  code={project.code}
                  url={project.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
