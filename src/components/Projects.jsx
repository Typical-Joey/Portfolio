import React from "react";
import Project from "./Project";
import KeeperIMG from "./images/Keeper.png";
import SecretIMG from "./images/Secret.png";
import BlogIMG from "./images/Blog.png";
import TindogIMG from "./images/Tindog.png";

export default function Projects() {
  return (
    <div id="Projects" className="projects">
      <h1>Projects</h1>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Project
              title="Keeper"
              info="Made using react, mongoDB, Nodejs, and express. Keeper is a task managing application with full login and register functionality as well as user specific saved note."
              img={KeeperIMG}
            />
          </div>
          <div className="col">
            <Project
              title="Secrets"
              info="Made using ejs, mongoDB, Nodejs, express, and
              passport. Secret is an application that allows users
              to upload secrets to share with everyone, this
              project was made to practice user authorization
              and authentication using passport, it includes
              password hashing as well as oAuth login."
              img={SecretIMG}
            />
          </div>
          <div className="col">
            <Project
              title="Blog"
              info="Made using ejs, NodeJS, and express. My blog
              application was the first time I did routing using
              express."
              img={BlogIMG}
            />
          </div>
          <div className="col">
            <Project
              title="Tindog"
              info="Made using css, and bootstrap. This was one of
              my first websites, made just using the basics"
              img={TindogIMG}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
