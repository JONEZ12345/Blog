const User = require("../model/userSchemaModel");
const jwt = require("jsonwebtoken");

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

module.exports = {
  signup,
};
