import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';


export default function SideIcons() {
  return (
    <div id="Side-Icons" className="side-icons">
      <LinkedInIcon fontSize="large" />
      <GitHubIcon fontSize="large" />
      <EmailIcon fontSize="large" />
      <DescriptionIcon fontSize="large"/>
    </div>
  );
}
