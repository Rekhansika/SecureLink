function checkURL(url) {
  let score = 0;

  // Rule 1: HTTPS
  if (!url.includes("https")) score += 25;

  // Rule 2: Keywords
  const keywords = ["login", "verify", "bank", "free", "offer"];
  keywords.forEach(word => {
    if (url.toLowerCase().includes(word)) score += 10;
  });

  // Rule 3: Length
  if (url.length > 75) score += 10;

  // Rule 4: Numbers in domain
  if (/\d/.test(url)) score += 15;

  // Rule 5: Special characters
  if ((url.match(/[-@%]/g) || []).length > 2) score += 10;

  let status = "Safe";

  if (score > 60) status = "Dangerous";
  else if (score > 30) status = "Suspicious";

  return { score, status };
}

module.exports = checkURL;