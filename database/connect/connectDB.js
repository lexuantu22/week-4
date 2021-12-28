const mongoose = require("mongoose");

const testConnectionDatabase = async (req, res, next) => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.kb63e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { testConnectionDatabase };