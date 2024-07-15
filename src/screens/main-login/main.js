
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; // For custom styles and animations

const MainPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'KLM63n6M2/Ro+/cls+17Hg==') {
      navigate('/KLM63n6M2/Ro+/cls+17Hg==');
    } else if (password === 'CFr0mOHA1jmHWvXbWDwh2w==') {
      navigate('/CFr0mOHA1jmHWvXbWDwh2w=='); //arpita
    } else if (password === 'JI7ARZUzc+WPgg7jQuJLTA==') {
      navigate('/JI7ARZUzc+WPgg7jQuJLTA=='); //preeti
    }else if (password === 'JLhhH/zGoxFTyuPWm/8vVw==') {
      navigate('/JLhhH/zGoxFTyuPWm/8vVw==');  //rajashree
    }else if (password === 'XSd2RZEe/nvYNUCkiJsG/Q==') { //shyla
      navigate('/XSd2RZEe/nvYNUCkiJsG/Q==');
    }else if (password === 'bAvDL2tsPHcVcw6EbLTFgQ==') { //nikeeta
      navigate('/bAvDL2tsPHcVcw6EbLTFgQ==');
    }else if (password === 'kPTYCRB9uo2IbmsFhk6IdQ==') { //prajna
      navigate('/kPTYCRB9uo2IbmsFhk6IdQ==');
    }else if (password === 'UKgEUvGI+WCtP2tUF33Ftw==') { //veera
      navigate('/UKgEUvGI+WCtP2tUF33Ftw==');
    }else if (password === 'nruRG+NPFAJoQ7s2ExDvqw==') { //santosh
      navigate('/nruRG+NPFAJoQ7s2ExDvqw==');
    }else if (password === 'Vdyv2j/udw1GA4IBYB4lVQ==') { //joshua
      navigate('/Vdyv2j/udw1GA4IBYB4lVQ==');
    }else if (password === 'FeDuWEbWi7TPUBYnUkuBPA==') { //praveena
      navigate('/FeDuWEbWi7TPUBYnUkuBPA==');
    }else if (password === 'U5G73be8RWRYVxUOd7QsSg==') { //aishwarya
      navigate('/U5G73be8RWRYVxUOd7QsSg==');
    }else if (password === 'hqySI7ZHS4r69VNGVGLmxQ==') { //syed
      navigate('/hqySI7ZHS4r69VNGVGLmxQ==');
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000); // Show error message for 3 seconds
    }
  };

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
          🔑 Enter Your Secret Key to Unlock Your Personalized Experience in Huzefa's Brain! 🧠
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="password-input"
            placeholder="Password"
          />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
          <p
            style={{
              color: 'red',
              animation: error ? 'shake 0.5s ease-in-out' : 'none',
              display: error ? 'block' : 'none',
            }}
          >
            Oops! 😞 Looks like your secret key didn't quite match the vibe of Huzefa's Brain. Try again or summon your inner detective! 🔍
          </p>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
