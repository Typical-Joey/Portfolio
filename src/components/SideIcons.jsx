import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import pdf from "./josephCapocciResume.PDF";
import { IconContainer, Icon} from './styles/sideIcons.styles';

export default function SideIcons() {
  return (
    <IconContainer id="Side-Icons" className="side-icons">
      <a href="https://www.linkedin.com/in/joseph-capocci-01bb10199/">
        <Icon><LinkedInIcon fontSize="large"/></Icon>
      </a>
      <a href="https://github.com/Typical-Joey/">
        <Icon><GitHubIcon fontSize="large"/></Icon>
      </a>
      <a href={pdf}>
        <Icon><DescriptionIcon fontSize="large"/></Icon>
      </a>
    </IconContainer>
  );
}
