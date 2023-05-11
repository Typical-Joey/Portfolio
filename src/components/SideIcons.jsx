import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import pdf from "../assets/pdf/josephCapocciResume.PDF";

export default function SideIcons() {
  return (
    <div id="Side-Icons" className="side-icons">
      <a href="https://www.linkedin.com/in/joseph-capocci-01bb10199/">
        <LinkedInIcon fontSize="large" className="icon" />
      </a>
      <a href="https://github.com/Typical-Joey/">
        <GitHubIcon fontSize="large" className="icon" />
      </a>
      <a href={pdf}>
        <DescriptionIcon fontSize="large" className="icon" />
      </a>
    </div>
  );
}
