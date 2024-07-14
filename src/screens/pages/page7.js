import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page7 = () => {
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
  Hello, <span style={{ color: 'red' }}>Sleepy Beauty</span>! 👋
</h1>
<p>
I remeber the first time you allocated to me from that time i knew it you are quick learner easily able to capture all the requirement and only problem was that you are not putting your effort which capability you really have still I can sense you are very good developer carrying big dreams in your eyes but just little push is required from your end and I believe you will get whatever you want.
</p>
<p>
You are such a mulit talented person you are as good as developer as well as good crafting skill you have Please take for sometime cuobon park to show case your real time skills.

</p>
<p>
You are such a good hearted person and recently after joining office I never consider you my junior you are like same as all we have because you have very mature mind set at this age which i really admire.
</p>
<p>
Just want to get good news about your job switiching hope soon I will get, please forgive if anything wrong I did by mistake which hurt you any time. Please be in touch with me over social media, wishing you very all the best for your future.
</p>


      </div>
    </div>
  );
};

export default Page7;
