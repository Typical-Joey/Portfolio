import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CodeIcon from "@material-ui/icons/Code";

export default function ProjectModal(props) {
  if (!props.show) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-background" onClick={props.hide} />
      <div className="modal">
        <img className="modal-img" src={props.img} alt="app-img" />
        <div className="modal-content">
          <CloseIcon className="modal-icon" onClick={props.hide} />

          <h6>Project:</h6>
          <h1>{props.title}</h1>
          <h6>About:</h6>
          <textarea readOnly="true" cols="24" rows="10" wrap="hard">
            {props.info}
          </textarea>
          <div className="modal-buttons">
            <a className="btn btn-outline-dark" href={props.code}>
              <CodeIcon /> Code
            </a>
            <a className="btn btn-outline-dark" href={props.url}>
              {props.url ? (<VisibilityIcon />) : (<VisibilityOffIcon />)} Demo
            </a>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
