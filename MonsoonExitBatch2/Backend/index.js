const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./BlogModel"); // Import your BlogModel here

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Assuming the connection file establishes the database connection
require("./connection");

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Blog added successfully", blog: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to add blog" });
  }
});

// GET API to retrieve all blogs
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.send(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to retrieve blogs" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
