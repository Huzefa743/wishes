import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page2 = () => {
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
  Hello, <span style={{ color: 'red' }}>Magnet</span>! 👋
</h1>
<p>You are like magnet whenver i am seeing you i am getting attract towards you, you are very attractive personality I ever mate, coming office without you like hardware without software i wish we could work
in same office to all life time but due to this world nature everything can't be control we have to go with the flow where our destiny will bring. </p>

<p>May be you don't remember me in global village office you spoke with me one time some function was there you are wearing the heels blue jeans and red top red lipstic may be you were some cordinator you were explaining something i have some question that you answer it but seriously I didn't get but ever want you to explain me that thing which i missed.</p>

<p>With respected to work which luckly i could get chance to work with you in multiple projects you are always sweet to me i really enjoy your company, you are very kind hearted woman 
i want at least still connect with me over social media I am wishing you soon you will get your aditiya roy kapoor and don't forgot to invite on you marriage so I will get one more chance to seeing you.
</p>

<p>You have very strong personality and very good body language anyone get affected by seeing you first time and this is one of the reason its hard for me to join the other office definitely i will search you there also.</p>

<p>Its very beautiful time which i have spent with you and i will never forgot you. Please keep in touch with me so I can see at least on Instagram.</p>

<p>Wishing you very all the best and one more thing please break this cage you deserve a lot don’t stick with this company just need a little push from your end you have all the skills set which is demanding is current market only you need to give little push to yourself.</p>

<p>Hope to hear good news about your new job soon.</p>


      </div>
    </div>
  );
};

export default Page2;
