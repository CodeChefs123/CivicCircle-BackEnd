import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "circlecivic@gmail.com",
    pass: "civiccirclemindstudiociac",
  },
});
export default transporter;
//
