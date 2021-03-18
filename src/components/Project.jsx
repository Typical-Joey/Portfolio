import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Project(props) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
    <ProjectModal />;
  }

  return (
    <div className="card project" onClick={handleClick}>
      <div className={props.className}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
