const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:3001"; // For local MongoDB
// If using MongoDB Atlas or a remote database, use a connection string like:
// const mongoURI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });
