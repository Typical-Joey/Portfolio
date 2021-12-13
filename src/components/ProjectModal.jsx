import React from "react";
import ReactDOM from "react-dom";
import CodeIcon from "@material-ui/icons/Code";
import CloseIcon from "@material-ui/icons/Close";
import { DemoActive, DemoInactive } from "./DemoButtons";

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
            {props.url ? (<DemoActive url={props.url} />) : (<DemoInactive url={props.url}/>)}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
