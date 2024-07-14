import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page13 = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const videoRef = useRef(null);

 
 

  // Function to slow down the video playback speed
  const slowDownVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1; // Adjust the playback rate as needed (e.g., 0.1 for slow speed)
    }
  };

  return (
    <div className="main-page">
      <video autoPlay loop muted className="background-video" ref={videoRef}>
        <source src="/bgvdo.mp4" type="video/mp4" />
      </video>
      <div className="content" style={{ padding: '5%' }}>
      <h1 style={{ fontSize: '1.5em', marginBottom: '5%' }}>
      Hello, <span style={{ color: 'red' }}>Aishwarya</span>! 👋
</h1>
<p>
We couldn't get much task to work together but whatver I could understand you are such a hard working and dedicated person I guess you just need a correct path and guidance is requried what I observed through out the time, i wish i could get more time to work with you but its happen we have to go with the nature flow.
</p>
<p>
As I move on, I want to share some tips with you. Always work hard and ask questions when you need help—it's how we learn best. Stay curious and take the lead when you can. Challenges are just chances to grow, so face them with a positive attitude. Remember, we're a team, so support each other like family.
</p>
<p>
Wishing you all the best for the future!
</p>

      </div>
    </div>
  );
};

export default Page13;
