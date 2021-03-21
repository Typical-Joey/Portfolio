import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <div id="Projects" className="projects">
      <h1>Projects</h1>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Project
              className="keeper"
              title="Keeper"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
          <div className="col">
            <Project
              title="Secrets"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
          </div>
          <div className="col">
            <Project
              title="Blog"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
          </div>
          <div className="col">
            <Project
              title="Tindog"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
