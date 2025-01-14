# react based heart monitory using webcam to watch subtle eye movements to determine pulse

## Project Overview
1. PROJECT OVERVIEW
- This React-based application uses a webcam to monitor subtle eye movements and compute the pulse rate. It employs advanced computer vision techniques, specifically focusing on analyzing microchanges in the user's eye region captured in real time.
  
- **Key Features:**
  - Real-time webcam feed integration.
  - Detection of subtle eye movement.
  - Pulse rate calculation using optical flow and signal processing.
  - Responsive UI for ease of interaction.
  - Display of live heart rate data.

- **Main Technologies Used:**
  - React for UI development.
  - `react-webcam` for handling real-time webcam feeds.
  - OpenCV.js for computer vision operations.
  - D3.js for visualizing heart rate data.

2. DEVELOPMENT INSTRUCTIONS
- **Running the application:**
  1. Clone the repository.
  2. Install dependencies using `npm install`.
  3. Start the application using `npm start`.
  4. Visit `http://localhost:3000` in your browser.

- **Testing the application:**
  - View the application in different lighting conditions.
  - Simulate motion and ensure accurate pulse rate measurements.
 
- **Key Files:**
  - `src/App.js`: Contains the main logic for webcam feed, eye movement detection, and pulse computation.
  - `src/index.js`: Entry point for the application.
  - `src/App.css`: Styling for the application.
  - `public/index.html`: Base HTML structure.

- **Important Configuration:**
  - Allow webcam permission in your browser.
  - Make sure the user's face is well-lit for better accuracy.
  - If hosting, configure HTTPS for webcam access (as required by browsers).