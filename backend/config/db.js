const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harsh9502s:emptyvessel@cluster0.22sbp6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
