import React, { useState } from "react";
import axios from "axios";
import VoiceInput from "./components/VoiceInput";

const UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_API_KEY";

const App = () => {
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState("");

  const handleVoiceInput = async (query) => {
    fetchImage(query);
    fetchInformation(query);
  };

  const fetchImage = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      setImage(response.data.urls.regular);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const fetchInformation = async (query) => {
    try {
      const response = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`
      );
      setInfo(response.data.extract);
    } catch (error) {
      console.error("Error fetching information:", error);
      setInfo("No information found.");
    }
  };

  return (
    <div>
      <h1>AI Image & Info Finder</h1>
      <VoiceInput onResult={handleVoiceInput} />
      {image && <img src={image} alt="Relevant" style={{ width: "300px" }} />}
      {info && <p>{info}</p>}
    </div>
  );
};

export default App;
