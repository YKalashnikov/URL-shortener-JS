const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoUrl");

const connectDb = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: false });
    console.log("Mongodb is connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDb;
