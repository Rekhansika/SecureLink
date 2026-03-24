# SecureLink

# 🔐 SecureLink – Spam & Phishing URL Detection System

## 📌 Overview

SecureLink is a full-stack web application that detects spam and phishing URLs using a rule-based risk analysis system. It evaluates links based on predefined security rules and provides a risk score along with clear explanations.

The system also optimizes performance by storing previously analyzed URLs in a database to avoid repeated computation.


## 🎯 Features

* 🔍 URL Risk Analysis (Safe / Suspicious / Dangerous)
* 📊 Weighted Risk Scoring System (out of 100)
* 🧠 Explainable Detection (shows reasons for risk)
* ⚡ Database Caching (checks DB before running algorithm)
* 🎨 Modern UI with Glassmorphism & 3D Effects
* 🔄 Real-time Feedback with Loading Indicator
* 📜 History-ready backend structure (extendable)


## 🛠️ Tech Stack

### Frontend:

* React (Vite)
* CSS (Glassmorphism + Animations)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB Atlas


## ⚙️ How It Works

1. User enters a URL
2. System normalizes the URL
3. Checks database:

   * If exists → returns stored result
   * If not → runs rule-based algorithm
4. Calculates risk score based on rules
5. Stores result in database
6. Displays:

   * Status (Safe / Suspicious / Dangerous)
   * Risk Score
   * Reasons for classification


## 🧠 Detection Rules

The system uses a weighted scoring model:

* 🚫 No HTTPS → +25
* 🔑 Suspicious Keywords → up to +20
* 🔢 Numbers in Domain → +25
* 📏 Long URL → +10
* ⚠ Special Characters → +10
* 🌐 Multiple Subdomains → +10

### Classification:

* ✅ Safe: 0–39
* ⚠ Suspicious: 40–69
* 🚨 Dangerous: 70+


## 💡 Example

**Input:**
http://amaz0n-login-free-offer.xyz

**Output:**

* Status: Dangerous
* Risk Score: 80%
* Reasons:

  * No HTTPS
  * Multiple suspicious keywords
  * Numbers in domain


## 🔮 Future Enhancements

* 🤖 Machine Learning-based detection
* 🌐 Browser Extension integration
* 📊 Risk visualization (charts)
* 🧾 URL history dashboard
* 🔐 Domain reputation API integration


## ⚠️ Limitations

* Rule-based system may produce false positives
* Does not detect newly evolved phishing techniques
* Context-aware detection not implemented


## 👩‍💻 Author

**Rekhansika and Rohitha**

## 🌟 Acknowledgment

This project is developed as part of an academic mini-project to demonstrate cybersecurity concepts and full-stack development.