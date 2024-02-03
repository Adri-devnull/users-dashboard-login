const { mongoose } = require("mongoose");

const UserScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    },
    gender: {
      type: String
    },
    img: {
      type: String
    }
  },
  {
    timestamps: true,
    collection: "users"
  }
);

module.exports = UserScheme;
