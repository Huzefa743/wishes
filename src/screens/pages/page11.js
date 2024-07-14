import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page11 = () => {
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
  Hello, <span style={{ color: 'red' }}>Quality Champion</span>! 👋
</h1>
<p>
I am very happy in this professional journey. I could get a chance to work with you. It was really nice working with you. You are really intelligent and easily acquire the requirements of the POC, which I really like. The knowledge you have in all technology and solution-providing capabilities, and very good communication skills in all scenarios, I really admire.

</p>
<p>
You are such a kind-hearted woman. I really admire whatever professional and personal guidance and opinions you have given to me; I always follow in my life. I wish I could get more chances to work with you so I can continue learning from you.
</p>
<p>
I am wishing you all the best for your future, and I hope you don't forget me and forgive me if I ever hurt you with my words.
</p>


      </div>
    </div>
  );
};

export default Page11;
