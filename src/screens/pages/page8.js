import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page8 = () => {
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
  Hello, <span style={{ color: 'red' }}>Junior Rock Star</span>! 👋
</h1>
<p>
As a junior developer you are always rock star from the work side, whatever the task who's ever will assigned to you, without showing any attitute you pick the task and with always carry smile face you deliver yourtask. Very good kind hearted attitude you have which I always remember.
</p>
<p>
For the first time as you join the TG team, out of everyone I realized from that time itself you are the best developer and the learning and task delivery you have done its totally outstanding i rmember all senior used to praise about you in front of bibhuti while we used to give feedback about you.
</p>
<p>
Please always work on your skill set don't settle for less and be in touch with me whatever the condition any time if you need any help from my side feel to contact any time, I hope we could spend more time together but at this we all deserve somewhere better in other company to achive our professional and personal growth.
</p>
<p>
Wishing you all the very best furute ahead.
</p>


      </div>
    </div>
  );
};

export default Page8;
