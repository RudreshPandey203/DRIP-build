import { StatusCodes } from "http-status-codes";
import Email from "../../models/email.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import BadRequestError from "../../errors/badRequestError.js";
import dotenv from "dotenv";
dotenv.config();

const sendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  const origin = "http://localhost:3000";
  const subject = `Email verification`;
  const verificationCode = crypto.randomBytes(40).toString("hex");
  const html = `<a href='${origin}/user-email-verification?email=${email}&verificationCode=${verificationCode}'>Click on the link to verify your account</a>`;

  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    type: "SMTP",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_ID,
    to: email,
    subject,
    html,
  };
  try {
    let info = await mailTransporter.sendMail(mailDetails);

    const newEmail = await Email.create({ email, verificationCode });
    res.status(StatusCodes.CREATED).json({ msg: "verification Code sent" });
  } catch (error) {
    throw new BadRequestError("Mail not sent");
  }
};

export { sendVerificationEmail };
