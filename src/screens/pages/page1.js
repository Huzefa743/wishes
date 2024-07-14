import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page1 = () => {
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
  Hello, <span style={{ color: 'red' }}>IT-Ustadd</span>! 👋
</h1>
<p>
  I have great respect for you, which will never leave my heart. The guidance
  you have provided me as a mentor, teacher, or manager is something I will
  never forget. Whatever professional etiquette I have, all credit goes to you.
  I always admire the suggestions and feedback you have given me over the last
  4.5 years. I will carry them with me throughout my life.
</p>
<p>
  You are such a good person. I understand that sometimes your job requires you
  to give harsh guidance, but I have always taken your input as a teacher. You
  have done a great job from a managerial perspective. I never feel like you
  are just a manager; I always see you as my teacher. Whenever you explain
  something, I pay full attention because I know I am learning valuable
  lessons from your words, and the respect I have for you is earned.
</p>
<p>
  I still remember when I was first assigned under you and given tasks. Those
  memories are very dear to me. It felt like a challenge, especially working
  with Shyla and Sandhya. I used to see others as my competitors, thinking I
  had to prove myself as the best, but looking back, it was a childish
  perspective, yet memorable.
</p>
<p>
  You have always been supportive and kind to me. Whenever I needed help,
  whether it was work from home or leave, you were always ready to support me.
  Your support has been invaluable to me, both professionally and personally.
</p>
<p>
  I am very excited for the future, knowing that I carry skills and memories
  that we built together. Please stay connected with me for a lifetime, and
  feel free to call me whenever you want. 🌟
</p>

      </div>
    </div>
  );
};

export default Page1;
