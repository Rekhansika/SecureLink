import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkURL = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/url/check", {
        url,
      });
      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>SafeLink URL Checker</h2>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "10px" }}
      />

      <br /><br />

      <button onClick={checkURL}>Check</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Status:</b> {result.status}</p>
          <p><b>Risk Score:</b> {result.riskScore || result.score}</p>
          <p><b>Source:</b> {result.source}</p>
        </div>
      )}
    </div>
  );
}

export default App;