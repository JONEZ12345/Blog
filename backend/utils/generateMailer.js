const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const Wait = require("../model/waitModel");

const sendMessage = async (req, otp) => {
  const { email, name, subject } = req.body;

  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Your EMAIL",
        pass: "Your PASSWORD",
      },
    });

    const mail_config = {
      from: "Sending EMAIL",
      to: email,
      subject: "OTP verification code",
      html: `
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0;">
            <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="font-size: 24px; margin-bottom: 20px;">Your OTP Code</h1>
                <p style="font-size: 16px; margin-bottom: 10px;">Dear ${name},</p>
                <p style="font-size: 16px; margin-bottom: 10px;">Your one-time password (OTP) for completing your transaction is: </p>
                <div style="display: inline-block; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 5px; background-color: #e0e0e0; margin: 20px 0;">${code}</div>
                <p style="font-size: 16px; margin-bottom: 10px;">Please use this code to complete your registration. This code is valid for the next 2 minutes.</p>
                <p style="font-size: 16px; margin-bottom: 10px;">If you did not request this code, please ignore this message.</p>
                <div style="font-size: 14px; color: #777; margin-top: 20px;">
                    <p> Thank you,<br> JONES </p>
                </div>
            </div>
        </body>
          `
    };

    transporter.sendMail(mail_config);

    const wait_exists = await Wait.findOne({ email: email, code: otp });

    if (wait_exists) {
      wait_exists.code = otp;
    } else {
      var wait = new Wait({
        email: email,
        pending: "yes",
        code: otp,
      });

      await wait.save();
    }

    return res.status(201).json({ message: "you should receive an email" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  sendMessage,
};
