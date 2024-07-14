import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page4 = () => {
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
  Hello, <span style={{ color: 'red' }}>Jannati Aurat</span>! 👋
</h1>
<p>
I have lot to say about you even i  can write a book on you, but due to page size i am limited with the words. You are such a pure soul women might be single peice in this world and I am glad
I meet with you in this life and realising that some good people still existing in this world.
</p>
<p>
Still remeber the first project we worked together Dm-automation from that time itself I knew that you are very good person they way you always avoid to take the credit of your work.
you are such a wife material who's ever will marry will be the luckiest person in the world but for sure please don't forgot to invite me on your marriage want to see that luckiest person
I am wishing you very all the best for your future, please don't stick with single company try to grow yourself you have lot to do in your life as i can observe you are very quick learner 
inteligent and sharp and savage reply woman I have ever mate. 
</p>
<p>
I will always miss your company while working together, with you i have very good understading, I wil miss our pentary time and the help which i always take while filling OKR there are 100's of memory I can't 
even demostrate here, but really admire you are always kind with me.
</p>
<p>
You are the only single piece in this world i can give the gurantee, may be in this life due to my bad luck you are not mine but i wish may be another world or another life you will be mine, you will always be in heart.
Any of time from last five year due to my harsh talk if you get hurt please forgive me!!
</p>


      </div>
    </div>
  );
};

export default Page4;
