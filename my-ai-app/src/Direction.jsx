import React, { useState, useCallback } from "react";
import axios from "axios";
import VoiceInput from "./components/VoiceInput";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const App = () => {
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVoiceInput = useCallback(async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");

    await Promise.all([fetchImage(query), fetchInformation(query)]);

    setLoading(false);
  }, []);

  const fetchImage = async (query) => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      setImage(data.urls?.regular || "");
    } catch (err) {
      setError("Failed to fetch image.");
      console.error("Image fetch error:", err);
    }
  };

  const fetchInformation = async (query) => {
    try {
      const { data } = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
      );
      setInfo(data.extract || "No relevant information found.");
    } catch (err) {
      setError("Failed to fetch information.");
      console.error("Info fetch error:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>AI Image & Info Finder</h1>
      <VoiceInput onResult={handleVoiceInput} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {image && <img src={image} alt="Search result" style={{ width: "300px", borderRadius: "10px", marginTop: "10px" }} />}
      {info && <p style={{ maxWidth: "600px", margin: "10px auto" }}>{info}</p>}
    </div>
  );
};

export default App;
