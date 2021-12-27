const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "user",
  }
);

// Create the model
const UserModel = mongoose.model("user", UserSchema);

// Export the model
module.exports = UserModel;