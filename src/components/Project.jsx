import React from "react";

export default function Project(props) {
  return (
    <div className="card project">
      <div className={props.className}>
        <h1>{props.title}</h1>
      </div>
      <div className="card-body">
        <p className="card-text">{props.body}</p>
        <a
          href=""
          className="btn btn-outline-light project-button project-button-left"
        >
          Code
        </a>
        <a
          href=""
          className="btn btn-outline-light project-button project-button-right"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
