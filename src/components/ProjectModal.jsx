import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";

export default function ProjectModal(props) {
  if (!props.show) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-background" onClick={props.hide} />
      <div className="modal">
        <img
          className="modal-img"
          src={require("./images/test.png")}
          alt="app-img"
        />
        <div className="modal-content">
          <CloseIcon className="modal-icon" onClick={props.hide}/>

          <h6>Project:</h6>
          <h1>{props.title}</h1>
          <h6>About:</h6>
          <textarea readOnly="true" cols="30" rows="10">
            {props.info}
          </textarea>
          <div className="modal-buttons">
            <a className="btn btn-outline-dark" href={props.code}>
              <CodeIcon /> Code
            </a>
            <a className="btn btn-outline-dark" href={props.demo}>
              <VisibilityIcon /> Demo
            </a>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
