const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirmPassword: {
      type: String,
      require: true,
    },
    // UserName: {
    //     type: Boolean,
    //     default: false,
    //   },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (name, username, email, password) {
  if (!name || !email || !username || !password || !confirmPassword) {
    throw Error("Please fill in all the fields");
  }

  const email_exists = await this.findOne({ email });

  if (email_exists) {
    throw Error("Email is already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const reg_user = this.create({name, username, email, password: hash}) 
  return reg_user
};
module.exports = mongoose.model("user", userSchema);
