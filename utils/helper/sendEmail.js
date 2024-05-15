import transporter from "../../config/nodemailer.js";

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "circlecivic@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    return error ? info : true;
  });
};
export default sendEmail;
