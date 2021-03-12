import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Contact() {
  return (
    <div id="Contact" className="contact margin-top">
      <h1>Contact Me</h1>
      <hr />
      <a href="https://www.linkedin.com/in/joseph-capocci-01bb10199/">
        <LinkedInIcon className="icons" />
      </a>
      <a href="https://github.com/Typical-Joey/">
        <GitHubIcon className="icons" />
      </a>
    </div>
  );
}
