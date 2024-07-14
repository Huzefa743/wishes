import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page9 = () => {
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
  Hello, <span style={{ color: 'red' }}>Dev Guru</span>! 👋
</h1>
<p>
I always enjoy your company when ever I got a chance to work with you, You are very senior but still the bond and attitude you always carry with me because of your kind heart nature I feels like just big brother, you are very good at taking the responsibility and allocating the task and take the feedback and always providing the support for each of us.
</p>
<p>
I remeber we worked together on multiple project but Dm automation tool is memorable POC we have don't together, I really admire your support, guidance and all feedback, input and DB structure designing capablity you have truly admirable.
</p>
<p>
I wish I could get a chance to work with you more but due to circumtances changing of job I could not get a chance to work with you more, but please keep in touch with me and I always need your guidance and support where ever I will be, I will definitely ping you over whatsapp whever I feel it.
</p>
<p>
Thanks for giving me Arnold tag! I am wishing you very very all the best for your future and expecting you to don't forget me and forgive me if any time you got hurt by my words.
</p>


      </div>
    </div>
  );
};

export default Page9;
