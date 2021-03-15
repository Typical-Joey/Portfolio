import React from "react";
import Project from "./Project";


export default function Projects() {
  return (
    <div id="Projects" className="projects">
      <h1>Projects</h1>
      <hr />
      <div className="row">
        <div class="col">
          <Project
            className="keeper"
            title="K E E P E R"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
        </div>
        <div class="col">
          <Project
            title="Secrets"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
        </div>
        <div class="col">
          <Project
            title="Blog"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
        </div>
        <div class="col">
          <Project
            title="Tindog"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
        </div>
      </div>
    </div>
  );
}
