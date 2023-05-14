import emailjs from "emailjs-com";
require("dotenv").config();

export async function sendEmail(message) {
  return await emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      message,
      // process.env.REACT_APP_USER_ID
      "test"
    )
    .then((result) => {
      console.log("Result: " + result);
      console.log(result.text);
      console.log(result.status);
      return true;
    })
    .catch((error) => {
      console.log("Error: " + error);
      console.log("Error Text: ", error.text);
      console.log(error.status);
      return false;
    });
}
