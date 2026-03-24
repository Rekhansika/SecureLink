const express = require("express");
const router = express.Router();

const Url = require("../models/Url");
const checkURL = require("../utils/checker");

const normalizeUrl = (url) => {
  return url
    .trim()
    .toLowerCase()
    .replace(/\/$/, ""); // removes ending /
};

router.post("/check", async (req, res) => {
  const { url } = req.body;

  const normalizedUrl = normalizeUrl(url);

  try {
    let existing = await Url.findOne({ url: normalizedUrl });

    if (existing) {
  if (!existing.reasons || existing.reasons.length === 0) {
    const result = checkURL(existing.url);

    existing.reasons = result.reasons;
    await existing.save();
  }

  return res.json({
    source: "database",
    url: existing.url,
    riskScore: existing.riskScore,
    status: existing.status,
    reasons: existing.reasons
  });
}

    const result = checkURL(normalizedUrl);
    console.log("RESULT:", result);

    const newUrl = new Url({
      url: normalizedUrl,
      riskScore: result.score,
      status: result.status,
      reasons: result.reasons
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