const mongoose = require("mongoose");

const testConnectionDatabase = async (req, res, next) => {
  try {
    await mongoose.connect("mongodb://localhost/db_shopee");
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { testConnectionDatabase };