import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>🔐 SafeLink</h2>
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Stay Safe from Malicious Links</h1>
        <p>Analyze URLs instantly and detect phishing threats with smart security checks.</p>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose SafeLink?</h2>

        <div className="feature-cards">
          <div className="card">
            <h3>⚡ Instant Detection</h3>
            <p>Check links in real-time with fast and efficient analysis.</p>
          </div>

          <div className="card">
            <h3>🧠 Smart Scoring</h3>
            <p>Advanced rule-based system assigns risk scores accurately.</p>
          </div>

          <div className="card">
            <h3>🔍 Transparent Results</h3>
            <p>See exactly why a link is dangerous or safe.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
  <h2>How It Works</h2>

  <div className="steps">
    <div className="step">🔗 Enter URL</div>
    <div className="step">⚙️ Analyze Link</div>
    <div className="step">📊 Get Risk Result</div>
  </div>
</section>

      {/* ABOUT */}
      <section className="about">
  <div className="about-container">

    <h2>About SafeLink</h2>

    <p className="about-desc">
      SafeLink is a cybersecurity-focused web application designed to protect users from phishing and spam links.
      It analyzes URLs using a rule-based scoring system and provides instant risk evaluation with clear explanations.
    </p>

    <div className="about-content">

      <div>
        <h4>🔐 Our Mission</h4>
        <p>To make the internet safer by helping users detect malicious links instantly.</p>
      </div>

      <div>
        <h4>📩 Contact</h4>
        <p>Email: rekha.dev@example.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </div>

      <div>
        <h4>🌐 Follow</h4>
        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>Instagram</p>
      </div>

    </div>

  </div>
</section>

<footer className="footer">
  <p>© 2026 SafeLink. All Rights Reserved.</p>
  <p>Built with 💙 by Rekha</p>
</footer>

    </div>
  );
}

export default Landing;