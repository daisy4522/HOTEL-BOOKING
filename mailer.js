const nodeMailer = require("nodemailer");
require("dotenv").config();
const transporter = nodeMailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT ? parseInt(process.env.PORT) : 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SENDER,
    pass: process.env.PASSWORD,
  },
});
transporter.sendMail(
  {
    from: process.env.SENDER,
    to: "jepletingdaisy78@gmail.com",
    subject: "Test Email: OTP",
    text: "This is a test email sent using  Nodemailer from lobo class.",
  },
  (error, info) => {
    if (error) {
      return console.log("Error occurred: " + error.message);
    }
    console.log("Email sent successfully: " + info.response);
  }
);
