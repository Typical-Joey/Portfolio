import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Project(props) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="card project">
      <div className={props.className}></div>
      <ProjectModal
        show={showModal}
        setShowModal={setShowModal}
        title={props.title}
        body={props.body}
        hide={handleModal}
        info={props.info}
      />
      <button className="btn btn-outline-dark" onClick={handleModal}>
        See Project
      </button>
    </div>
  );
}
