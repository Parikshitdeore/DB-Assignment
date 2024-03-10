const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  profilePicture: String,
  nickname: String,
  phoneNumber: Number,
  address: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
