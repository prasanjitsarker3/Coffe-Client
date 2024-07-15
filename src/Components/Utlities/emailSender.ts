import nodemailer from "nodemailer";

const emailSender = async (email: string, html: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.appPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: '"The Daily Cup" <sarkerprasanjit379@gmail.com>',
    to: email,
    subject: "Product Order",
    html,
  });

  console.log("Message sent:", info.messageId);
  return info;
};

export default emailSender;
