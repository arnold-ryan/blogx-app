const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connect.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error);

    // CLOSE THE PROCESS WITH FAILURE
    process.exit(1);
  }
};

module.exports = connectDB;
