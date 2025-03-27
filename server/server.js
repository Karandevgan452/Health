require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./database/db");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API is running on respective port..."));
app.listen(PORT, () => {g
  console.log(`Server running on port:${PORT}`);
});

connectDB();
