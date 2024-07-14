import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.css'; // For custom styles and animations

const Page6 = () => {
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
  Hello, <span style={{ color: 'red' }}>Fashion Stylist</span>! 👋
</h1>
<p>
You are such a good soul what i observe throughout the years. Beauty with style you are such a good person as a colleague and friend. I always try to reach you out whenever i heard a trendy news or gossip about the office either its a hike news, layed off news or any promotion news i still remember together we use to make the plan how soon we are going to leave this company so will not see bibhuti face ever.
</p>
<p>
Initially i know i was assuming you as a competitor since you are also nodejs developer i used to hide the requirement and skills set from you but later of time I realised you are far better then me in all prospective and i should now see you as compititor beacuse you are very good person by heart.
</p>
<p>
By seeing you and talking with you don’t know but some flirting words will come out from my mouth that’s total naturally because you have such personality i am missing you are not here so i could see you at least by face last time but its my bad I couldn’t. But always connect with me over whatsapp or Instagram so i can get a chance to see you.
</p>
<p>
You have all the potential i am feeling you are wasting your talent here please try to join some better opportunity i can see you have all the current market skills set which can be irreplaceable in next 5 year.
</p>
<p>
Please forgive if anything i did wrong or some bad talk i done with you and wishing you all the very best and please don’t forgot to call me in your marriage.

</p>

      </div>
    </div>
  );
};

export default Page6;
