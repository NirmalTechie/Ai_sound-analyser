📌 AI Sound Project
A Vite + React AI project that takes a voice prompt, retrieves a relevant image, and displays related information.

🚀 Features
✅ Speech-to-Text conversion using react-speech-recognition
✅ Fetches relevant images from Unsplash API
✅ Retrieves related information from Wikipedia API
✅ Built with Vite + React for fast performance

📂 Project Structure
pgsql
Copy
Edit
AI-sound/
│── src/
│   ├── components/
│   │   ├── VoiceInput.jsx  <-- Handles speech-to-text
│   ├── App.jsx  <-- Main logic for fetching images & info
│   ├── main.jsx  <-- Entry point for the app
│   ├── index.css  <-- Styling
│── public/
│── package.json
│── vite.config.js
│── README.md
🛠️ Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/AI-sound.git
cd AI-sound
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up API Keys
This project requires Unsplash API to fetch images.

Go to Unsplash Developer and create an API key.
Create a .env file in the project root and add:
ini
Copy
Edit
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
4️⃣ Start the Development Server
sh
Copy
Edit
npm run dev
Open http://localhost:5173/ in your browser. 🎉

📝 Usage Guide
Hold the "🎤 Hold to Speak" button and say a word or phrase.
The app will convert speech to text and use it to fetch:
A relevant image from Unsplash
Related information from Wikipedia
The image and text will be displayed on the screen.
🔧 Tech Stack
Frontend: React (Vite)
APIs:
Speech-to-Text: react-speech-recognition
Images: Unsplash API
Information: Wikipedia API
State Management: React Hooks
Styling: CSS
📜 License
This project is open-source under the MIT License.

💡 Future Enhancements
🔹 Use OpenAI’s DALL·E API for AI-generated images
🔹 Improve UI with animations and better styling
🔹 Add a backend (Node.js/Express) for better API security
