import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";

export default function ProjectModal({ show, setShowModal, title }) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-background">
        <div className="modal">
          <img
            className="modal-img"
            src="./images/test.png"
            alt="app-img"
          />
          <div className="modal-content">
            <CloseIcon />
            <h6>Project:</h6>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
