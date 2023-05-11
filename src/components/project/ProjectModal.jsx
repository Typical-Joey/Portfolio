import React from "react";
import ReactDOM from "react-dom";
import CodeIcon from "@material-ui/icons/Code";
import CloseIcon from "@material-ui/icons/Close";
import { DemoActive, DemoInactive } from "./DemoButtons";

export default function ProjectModal({
  show,
  hide,
  img,
  title,
  info,
  code,
  url,
}) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-background" onClick={hide} />
      <div className="modal">
        <img className="modal-img" src={img} alt="app-img" />
        <div className="modal-content">
          <CloseIcon className="modal-icon" onClick={hide} />

          <h6>Project:</h6>
          <h1>{title}</h1>
          <h6>About:</h6>

          <textarea
            value={info}
            readOnly={true}
            cols="24"
            rows="10"
            wrap="hard"
          />

          <div className="modal-buttons">
            <a className="btn btn-outline-dark" href={code}>
              <CodeIcon /> Code
            </a>
            {url ? <DemoActive url={url} /> : <DemoInactive />}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
