import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Project(props) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="card project" onClick={handleModal}>
      <div className={props.className}>
        <h1>{props.title}</h1>
      </div>
      <ProjectModal
        show={showModal}
        setShowModal={setShowModal}
        title={props.title}
        body={props.body}
      />
    </div>
  );
}
