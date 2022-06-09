const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `Mongo DB connected: ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
