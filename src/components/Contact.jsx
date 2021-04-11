import React from "react";
import emailjs from "emailjs-com";
require("dotenv").config();

export default function Contact() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="Contact" className="margin-top container-fluid">
      <h1>Contact Me</h1>
      <hr />
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
        <button type="submit" className="btn btn-outline-light">
          Send Email
        </button>
      </form>
    </div>
  );
}
