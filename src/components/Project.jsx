/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { ProjectContainer } from "./styles/project.styles";

export default function Project(props) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <ProjectContainer className="card">
      <img src={props.img} alt="App Image" />
      <ProjectModal
        show={showModal}
        title={props.title}
        body={props.body}
        hide={handleModal}
        info={props.info}
        img={props.img}
        code={props.code}
        url={props.url}
      />
      <button className="btn btn-outline-dark" onClick={handleModal}>
        See Project
      </button>
    </ProjectContainer>
  );
}
