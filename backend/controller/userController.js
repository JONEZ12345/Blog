const User = require("../model/userSchemaModel");
const jwt = require("jsonwebtoken");
const generateOtp = require("../utils/generateOtp");
const sendMessage = require("../utils/generateMailer");
const Wait = require("../model/waitModel");

const createToken = (username) => {
  return jwt.sign({ username }, "strk1djfncsp", { expiresIn: "id" });
};

const signup = async (req, res) => {
  const { name, email, username, password, confirmPassword } = req.body;

  if (!name || !email || !username || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ status: "error", error: "Please fill in all the fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      status: "error",
      error: "password and confirm password must match",
    });
  }

  const user_email_exists = await User.findOne({ email: email });
  if (user_email_exists) {
    return res.status(401).json({
      status: "warning",
      error: "This user email already exists!",
    });
  }

  const username_exists = await User.findOne({ username: username });
  if (username_exists) {
    return res.status(401).json({
      status: "warning",
      error: "This user email already exists!",
    });
  }

  try {
    var user_created = await User.signup(email, username);

    // const token = createToken(user_created._id);

    res.status(201).json({ massage: "This user was created successfully" });
  } catch (error) {
    res.status(201).json({ error: error.message || error.error });
  }
};

const validationOfUSer = async (req, res) => {
  const otp = generateOtp("0");

  await generateMailer(req, otp);
};

const verifyUserOtp = async (req, res) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const wait = await Wait.findOne({ email: email, code: otp });

      if (!wait || wait.length === 0) {
        return res.status(404).json({ error: "OTP is invalid or expired" });
      }

      // check if otp is expired

      return res.status(200).json({ message: "User verification successful" });
    } else {
      return res.status(404).json({ error: error?.error || "User Not Found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: error?.error || "Internal server error" });
  }
};

module.exports = {
  signup,
  validationOfUSer,
  verifyUserOtp,
};
