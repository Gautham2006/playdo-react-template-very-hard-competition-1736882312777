import React, { useRef, useEffect, useState } from 'react';  
import Webcam from 'react-webcam';  
import './App.css';  

function App() {  
  const webcamRef = useRef(null);  
  const [pulse, setPulse] = useState(null);  

  useEffect(() => {  
    const captureFrame = setInterval(() => {  
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {  
        const video = webcamRef.current.video;  
        const canvas = document.createElement('canvas');  
        const context = canvas.getContext('2d');  

        canvas.width = video.videoWidth;  
        canvas.height = video.videoHeight;  
        context.drawImage(video, 0, 0, canvas.width, canvas.height);  

        const frameData = context.getImageData(0, 0, canvas.width, canvas.height);  
        // Processing logic for detecting eye movement and computing pulse here  
      }  
    }, 100);  

    return () => clearInterval(captureFrame);  
  }, []);  

  return (  
    <div className="App">  
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />  
      <div className="pulse-data">Pulse: {pulse ? `${pulse} BPM` : 'Calculating...'}</div>  
    </div>  
  );  
}  

export default App;