import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ContactForm, ContactContainer, ErrorColor, SuccessColor } from './styles/contact.styles';
require("dotenv").config();

export default function Contact() {
  const [response, setResponse] = useState();

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
          const successResponse = (<SuccessColor> Email Sent! </SuccessColor>);
          setResponse(successResponse);
        },
        (error) => {
          console.log(error.text);
          const errorResponse = (
          <ErrorColor>  
            Sorry! Looks like something went wrong. Please try again. 
          </ErrorColor>);
          setResponse(errorResponse);
        }
      );
    e.target.reset();
  }

  return (
    <ContactContainer id="Contact" className="container">
      <div className="row">
        <h1 className="col-lg-12">Contact Me</h1>
      </div>

      {response}

      <ContactForm onSubmit={sendEmail} >
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
      </ContactForm>
    </ContactContainer>
  );
}
