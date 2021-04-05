/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Project(props) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="card project">
      <div className="project-img">
        <img src={props.img} alt="App Image" />
      </div>
      <ProjectModal
        show={showModal}
        title={props.title}
        body={props.body}
        hide={handleModal}
        info={props.info}
        img={props.img}
        code={props.code}
      />
      <button className="btn btn-outline-dark" onClick={handleModal}>
        See Project
      </button>
    </div>
  );
}
