const { default: mongoose } = require("mongoose");

const schema = moongoose.schema;

const waitSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    pending: {
      enum: ["yes", "no"],
      type: String,
    },
    code: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("wait", waitSchema);
