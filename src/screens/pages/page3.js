import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page3 = () => {
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
  Hello, <span style={{ color: 'red' }}>Beauty With Brain</span>! 👋
</h1>
<p>
It was really good time which i have spent with you, you are not just my colleague you are my office best friend you always given me good opinion either its a personal or professional issues i always try to discuss with you first and i really admire your suggestions.

</p>
<p>
You are such a skill-full bomb or i can say beauty with brain tag is just for you i never meet a girl having knowledge of so many languages, quick understanding, quick learner, coding skills, beautiful, foodie with fit body style, even good dressing sense with still kind with me sometimes i think about you and digest how one person have such all the skills set but still kind may be you are some queen soul.
</p>
<p>
I really enjoy worked with you whenever i am allocated task with you i was always sure I don’t need to take any tension such trust i always have on your capability even i always feel happy whenever bibhuti assigned any task with you and even the office break time whenever you are not there i feel bored and I can’t forget you laugh
</p>
<p>
I am wishing you very all the best for your future and i hope you will find your dream men soon., not pick the boy i can understand your choice now, wishing you very very all the best for your future but for you i will not give any suggestion for job change i am sure i will get result soon.
</p>


      </div>
    </div>
  );
};

export default Page3;
