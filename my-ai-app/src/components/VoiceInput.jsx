import React, { useEffect } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

const VoiceInput = ({ onResult }) => {
  const { transcript, listening, resetTranscript, startListening, stopListening } =
    useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      onResult(transcript);  // Pass recognized text to parent component
    }
  }, [transcript, onResult]);

  return (
    <div>
      <button onMouseDown={startListening} onMouseUp={stopListening}>
        🎤 Hold to Speak
      </button>
      {listening && <p>Listening...</p>}
      <p>Transcript: {transcript}</p>
      <button onClick={resetTranscript}>Reset</button>
    </div>
  );
};

export default VoiceInput;
