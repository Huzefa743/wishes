import React from 'react'
import './intro.css'
import { Button } from '@mui/material'
import animationData from './sBP7pgHBRc.json'
import Lottie from 'react-lottie';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import profile from '../../logos/dp.jpg';
 import ExamplePdf from '../../resume.pdf'

function Intro() {

   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ExamplePdf; // Use the same PDF file as in the <a> element
        link.download = 'Huzefa-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
   <>
   <div className="row main-container" >
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 intro-content" >
         <p className="intro-title">Hi, My name is</p>
         <p className="intro-heading">Huzefa Khan.</p>
         <p className="intro-sub-heading">I build things for the web.</p>
         <p className="intro-description">I am a seasoned Full-Stack Developer with over 4.5 years of hands-on experience in the dynamic realm of web development. I find joy in crafting robust solutions that span the entire spectrum of web technologies from the user interface to the server logic.</p>

        <button className="intro-button" onClick={handleDownload}>
           <CloudDownloadIcon style={{marginRight:'10px', color:'green'}}/>
            Resume</button>
          
        
        
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 intro-image">
      {/* <Lottie options={defaultOptions} style={{width:'auto', maxWidth:'400px',height:'auto',  maxHeight:'400px'}} /> */}
      <img src={profile} className='profile-image' loading='lazy'></img>
      </div>
   </div>
   </>
  )
}

export default Intro
