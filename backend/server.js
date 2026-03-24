const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/url", urlRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});