function checkURL(url) {
  let score = 0;
  let reasons = [];

  const lowerUrl = url.toLowerCase();

  // 🚫 Rule 1: HTTPS
  if (!url.startsWith("https")) {
    score += 25;
    reasons.push("No HTTPS (insecure connection) → +25");
  }

  // 🔑 Rule 2: Suspicious Keywords (Dynamic)
  const keywords = ["login", "verify", "bank", "free", "offer", "secure", "account"];
  let keywordCount = 0;

  keywords.forEach(word => {
    if (lowerUrl.includes(word)) {
      keywordCount++;
    }
  });

  if (keywordCount === 1) {
    score += 10;
    reasons.push("1 suspicious keyword found → +10");
  } else if (keywordCount === 2) {
    score += 15;
    reasons.push("2 suspicious keywords found → +15");
  } else if (keywordCount >= 3) {
    score += 20;
    reasons.push("Multiple suspicious keywords found → +20");
  }

  // 🔢 Rule 3: Numbers in domain (HIGH RISK)
  if (/\d/.test(url)) {
    score += 25;
    reasons.push("Numbers in domain (possible spoofing) → +25");
  }

  // 📏 Rule 4: URL Length
  if (url.length > 75) {
    score += 10;
    reasons.push("URL too long → +10");
  }

  // ⚠ Rule 5: Special Characters
  const specialCount = (url.match(/[-@%]/g) || []).length;

  if (specialCount >= 3) {
    score += 10;
    reasons.push("Too many special characters → +10");
  } else if (specialCount === 2) {
    score += 5;
    reasons.push("Moderate special characters → +5");
  }

  // 🌐 Rule 6: Multiple Subdomains
  const dotCount = (url.match(/\./g) || []).length;
  if (dotCount > 3) {
    score += 10;
    reasons.push("Too many subdomains → +10");
  }

  // 🎯 Final Classification
  let status = "Safe";

  if (score >= 70) status = "Dangerous";
  else if (score >= 40) status = "Suspicious";

  return { score, status, reasons };
}

module.exports = checkURL;