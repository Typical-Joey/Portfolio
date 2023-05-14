import emailjs from "emailjs-com";
require("dotenv").config();

export async function sendEmail(message) {
  return await emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      message,
      process.env.REACT_APP_USER_ID
    )
    .then((result) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}
