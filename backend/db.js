const mongoose = require("mongoose");

const MONGOOSE_URI =
  process.env.MONGOOSE_URI ||
  "mongodb+srv://dnyanankur:11111@cluster0.5slqu7t.mongodb.net/dnyanankur";

const mongoData = () => {
  mongoose
    .connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = mongoData;
