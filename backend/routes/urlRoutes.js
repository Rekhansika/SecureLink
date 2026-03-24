const express = require("express");
const router = express.Router();

const Url = require("../models/Url");
const checkURL = require("../utils/checker");

router.post("/check", async (req, res) => {
  const { url } = req.body;

  try {
    // 1. Check DB first
    let existing = await Url.findOne({ url });

    if (existing) {
      return res.json({
        source: "database",
        ...existing._doc,
      });
    }

    // 2. Run algorithm
    const result = checkURL(url);

    // 3. Save to DB
    const newUrl = new Url({
      url,
      riskScore: result.score,
      status: result.status,
    });

    await newUrl.save();

    res.json({
      source: "algorithm",
      ...result,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;