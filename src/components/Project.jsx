import React from "react";

export default function Project(props) {
  return (
    <div className="card project">
      <div className={props.className}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
