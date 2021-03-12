import React from "react";

export default function Project(props) {
  return (
    <div className="project">
      <h1>{props.title}</h1>
      <hr />
      <p>{props.body}</p>
    </div>
  );
}
