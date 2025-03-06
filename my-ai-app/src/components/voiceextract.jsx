import React, { useState } from "react";

const VoiceInput = ({ onResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      onResult(text); // Pass the extracted text to parent component
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={startListening} disabled={isListening} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        {isListening ? "Listening..." : "Start Voice Input"}
      </button>
      {transcript && <p>Recognized: {transcript}</p>}
    </div>
  );
};

export default VoiceInput;
