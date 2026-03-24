const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: String,
  riskScore: Number,
  status: String,
  reasons: [String],  
  checkedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Url", urlSchema);