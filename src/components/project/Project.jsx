/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Project({ img, title, body, info, code, url }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="card project">
      <img src={img} alt="App Image" className="project-img" />
      <ProjectModal
        show={showModal}
        title={title}
        body={body}
        hide={toggleModal}
        info={info}
        img={img}
        code={code}
        url={url}
      />
      <button className="btn btn-outline-dark" onClick={toggleModal}>
        See Project
      </button>
    </div>
  );
}
