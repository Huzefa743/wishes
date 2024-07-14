import React from 'react'
import './about.css'
import { Button, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import animationData from './sBP7pgHBRc.json'
import Lottie from 'react-lottie';
import profile from '../../logos/dp.jpg';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import nodejs from '../../logos/technology/node-js.svg'
import react from '../../logos/technology/react.png'
import mongodb from '../../logos/technology/mongodb.png'
import express from '../../logos/technology/express.png'
import javascript from '../../logos/technology/javascript.png'
import mysql from '../../logos/technology/mysql.jpeg'
import github from '../../logos/technology/github.png'
import docker from '../../logos/technology/docker1.png'
import aws from '../../logos/technology/aws.jpeg'
import huggingface from '../../logos/technology/huggingface.png'
import langchain from '../../logos/technology/langchain.png'
import redis from '../../logos/technology/redis.jpeg'


function About() {

   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

  return (
   <>
   <div className='main-container' id="about">
   <div className='row'>
   <p className='pr-sub-heading'>About Me</p>
   <Divider variant='fullWidth' style={{marginBottom:20}} component="p"></Divider>
   </div>
   <div className="row " >
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 intro-content">


      <p className="intro-description">  I'm a seasoned MERN Stack Developer with 4.5 years at Torry Harris Integration Solutions. Proficient in both frontend and backend, I've excelled in projects using MongoDB, MySQL, Node.js, and Express. My passion for responsive UI development led me to choose JavaScript.</p>
      <p className="intro-description"> I have a proven track record of collaborating with cross-functional teams, communicating complex ideas effectively, and delivering high-quality projects on time. As a quick learner, I am always ready to take on new challenges and deliver innovative solutions.</p>

      <p className="intro-description">I am seeking a role that challenges my problem-solving abilities, allows me to plan and execute complex projects, and provides opportunities for professional growth. If you are looking for a self-motivated and skilled MERN stack developer, I would be thrilled to discuss potential opportunities with you.</p>

         {/* <p className="intro-description">I am a passionate and self-taught Full-Stack Developer residing in Saharanpur, India. At the age of 22, I have dedicated myself to the exciting world of web development and have embarked on a journey of constant learning and growth.</p>
         <p className="intro-description">From a young age, I was fascinated by technology and its ability to shape the world around us. This curiosity led me to explore programming and web development, where I quickly discovered my knack for creating dynamic and user-friendly applications.</p>
         <p className="intro-description">As a Full-Stack Developer, I possess a diverse skill set that allows me to handle both the frontend and backend aspects of web development.</p>  
      */}
      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 intro-image">
      {/* <img src={profile} className='profile-image'></img> */}

     {/* <p style={{fontSize:'30px', fontWeight:800}}> Key Highlights</p> */}

      {/* <p > <b>Experience:</b> 4.5 years in MERN Stack Development</p>
      <p > <b>Versatility:</b> Backend and Frontend proficiency</p>
      <p > <b>Tools:</b> MongoDB, MySQL, Node.js, Express, Swagger, Postman</p>
      <p > <b>Collaboration:</b> Proven track record in cross-functional teams</p>
      <p > <b>Adaptability:</b> Quick learner, problem-solver</p>
      <p > <b>Aspirations:</b> Seeking challenging roles for professional growth</p> */}
      <List >
        <ListItem   sx={{ borderRadius:'5px', backgroundColor: "#1a84ff", color:'white', padding:0, marginBottom:'10px'}}>
              <ListItemButton>
                  <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: '<p class="intro-skills" style="margin:0;"><b>Experience:</b> 4.5 years in MERN Stack Development</p>' }} />}/>
              </ListItemButton>
        </ListItem>
        <ListItem   sx={{ borderRadius:'5px', backgroundColor: "#1a84ff", color:'white', padding:0, marginBottom:'10px'}}>
              <ListItemButton>
                  <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: '<p class="intro-skills" style="margin:0;" > <b>Versatility:</b> Backend and Frontend proficiency</p>' }} />}/>
              </ListItemButton>
        </ListItem>
        {/* <ListItem   sx={{ borderRadius:'5px', backgroundColor: "#1a84ff", color:'white', padding:0, marginBottom:'10px'}}>
              <ListItemButton>
                  <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: '<p class="intro-skills" style="margin:0;"> <b>Tools:</b> MongoDB, MySQL, Node.js, Express, Swagger, Postman</p>' }} />}/>
              </ListItemButton>
        </ListItem> */}
        <ListItem   sx={{ borderRadius:'5px', backgroundColor: "#1a84ff", color:'white', padding:0, marginBottom:'10px'}}>
              <ListItemButton>
                  <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: ' <p class="intro-skills" style="margin:0;"> <b>Collaboration:</b> Proven track record in cross-functional teams</p>' }} />}/>
              </ListItemButton>
        </ListItem>
        <ListItem   sx={{ borderRadius:'5px', backgroundColor: "#1a84ff", color:'white', padding:0, marginBottom:'10px'}}>
              <ListItemButton>
                  <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: '<p class="intro-skills" style="margin:0;"> <b>Adaptability:</b> Quick learner, problem-solver</p>' }} />}/>
              </ListItemButton>
        </ListItem>
        <ListItem   sx={{ borderRadius:'5px', backgroundColor: "#1a84ff", color:'white', padding:0, marginBottom:'10px'}}>
              <ListItemButton>
                  <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: '<p class="intro-skills" style="margin:0;"> <b>Aspirations:</b> Seeking challenging roles for professional growth</p>' }} />}/>
              </ListItemButton>
        </ListItem>
     
      </List>
      
     
      

      </div>
   </div>
   <div style={{justifyContent:'center', display:'flex', flexWrap:'wrap', marginTop:'50px'}} >
   <div className="block">
   <img src={nodejs} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={react} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={express} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={mongodb} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={javascript} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={mysql} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={github} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={docker} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={aws} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={huggingface} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={langchain} alt="Alt Text" loading='lazy' />
   </div>
   <div className="block">
   <img src={redis} alt="Alt Text" loading='lazy' />
   </div>
   </div>
   </div>
   </>
  )
}

export default About
