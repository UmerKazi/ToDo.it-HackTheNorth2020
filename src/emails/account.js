const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "umerkazi@hotmail.com",
    subject: "Thanks for Joining!",
    text: `Welcome to my ToDo.it, ${name}. Remeber to fill out your profile!
    
    Best,
    ToDo.it Team
    `
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "umerkazi@hotmail.com",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
