import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page10 = () => {
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
  Hello, <span style={{ color: 'red' }}>American Import</span>! 👋
</h1>
<p>
You are such a nice boy I ever met kind hearted and pure good soul. Zero attitude guy. I truly admire your skills set that you have along with soft nature. On time completion of any type of task. You are very good in new topic exploration there is nobody who can be good as you for exploring new technology or unknow tool and easily adoptability you have.

</p>
<p>
I feel little sad about you because the skill set along with your US accent you have, you are deserving very ver far better place that currently you are. Please take my suggestion and give me some good news about your new job and I would really like if you could get some on-site job like US based that you really deserve with huge money.

</p>
<p>
I will always remeber you as in my memory which recently we built while going office to PG, throughout all the unncessary talk we do and make one of US accent along with shihaan and good talk and jokes its never forgatable and the kindness you always shown never get hurted from our bad jokes i really admire.
</p>
<p>
Please don't forget and be in touch with me and forgive me if anytime you got hurt by any jokes.
</p>


      </div>
    </div>
  );
};

export default Page10;
