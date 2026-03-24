const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: String,
  riskScore: Number,
  status: String,
});

module.exports = mongoose.model("Url", urlSchema);