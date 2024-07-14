import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page5 = () => {
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
  Hello, <span style={{ color: 'red' }}>Backend Boss</span>! 👋
</h1>
<p>
I still remember together we allocated to bibhuti and initially days i was seeing as my competitor you are far better then me and but after some time I realised you are actually a very good kind hearted person you never do work for show case your name but i can say you are very good backend developer whatever the task come on your table easy development for you always just because you have all the skills set which a good Backend developer needed.
</p>
<p>
I always tried to take some opinion because i know you are married person and mature enough to give me good advice either its personal and professional.
</p>
<p>
Please forgive me if any time you got heart during our initial days because in beginning i knew i never good to anyone and i got change by seeing you and other office colleagues that all are very good person its like again we have completed our one more degree now its time to change the college with but this time under under single professor.
</p>
<p>
I really admire your skills please don’t stick with this company you have a lot skills please try to push your boundaries don’t be limit your skills set and you are a such developer which currently needed in market so will be grow by professionally and financially.
</p>
<p>
Wishing you very all the best for your future.
</p>

      </div>
    </div>
  );
};

export default Page5;
