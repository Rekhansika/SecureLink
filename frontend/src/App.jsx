import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const cardRef = useRef(null);

const handleMouseMove = (e) => {
  const card = cardRef.current;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 20;
  const rotateY = (x - centerX) / 20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
};

const handleMouseLeave = () => {
  const card = cardRef.current;
  card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
};

  const checkURL = async () => {
    if (!url) return;
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/url/check", { url });
      setResult(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const getStatusClass = () => {
    if (!result) return "";
    if (result.status === "Safe") return "safe";
    if (result.status === "Suspicious") return "suspicious";
    return "danger";
  };

  return (
    <div className="container">

      {/* Floating Background Elements */}
      <div className="bg-circle"></div>
      <div className="bg-circle2"></div>

      <div
  className="glass-card"
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
        <h1>🔐 SafeLink</h1>

        <input
          type="text"
          placeholder="Paste your URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={checkURL}>
          {loading ? "Checking..." : "Check Link"}
        </button>

        {loading && <div className="loader"></div>}

        {result && (
          <div className={`result-box ${getStatusClass()}`}>
            
            <h3 className={getStatusClass()}>
              {result.status}
            </h3>

            <p><strong>Risk Score:</strong> {result.riskScore || result.score}%</p>
            <p><strong>Source:</strong> {result.source}</p>

            {/* Reasons */}
            <div className="reasons">
              <h4>Why this is risky:</h4>
              {result.reasons && result.reasons.length > 0 ? (
  result.reasons.map((r, i) => (
    <div key={i} className="reason-item">
      ⚠ {r}
    </div>
  ))
) : (
  <p>No issues detected</p>
)}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;