import React, { useState } from "react";
import emailjs from "emailjs-com";
require("dotenv").config();

export default function Contact() {
  const [response, setResponse] = useState();
  const [msgColor, setMsgColor] = useState();

  function handleResponse(msg) {
    setResponse(msg);
  }

  function handleColor(color) {
    setMsgColor(color);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          handleResponse("Email Sent!");
          handleColor("success");
        },
        (error) => {
          console.log(error.text);
          handleResponse(
            "Sorry! Looks like something went wrong. Please try again."
          );
          handleColor("error");
        }
      );
    e.target.reset();
  }

  return (
    <div id="Contact" className="margin-top container">
      <div className="row">
        <h1 className="col-lg-12">Contact Me</h1>
      </div>
      <h2 className={msgColor}>{response}</h2>
      <form onSubmit={sendEmail} className="contact">
        <div className="form-group row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="form-control"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            id="name"
            className="form-control"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            cols="30"
            rows="10"
            placeholder="Message"
          />
        </div>
        <button type="submit" className="row btn btn-outline-light">
          Send Email
        </button>
      </form>
    </div>
  );
}
