import React, {useState, useEffect} from 'react'
import './project.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Tooltip, Typography } from '@mui/material'
import p1 from '../../logos/project/allure-home/p1.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import p2 from '../../logos/project/allure-home/p2.png'
import p3 from '../../logos/project/allure-home/p3.png'
import p4 from '../../logos/project/allure-home/p4.png'
import p5 from '../../logos/project/allure-home/p5.png';
import p6 from '../../logos/project/allure-home/p6.png'
import p7 from '../../logos/project/allure-home/p7.png'
import p8 from '../../logos/project/allure-home/p8.png'
import p9 from '../../logos/project/allure-home/p9.png'
import p10 from '../../logos/project/allure-home/p10.png'
import p11 from '../../logos/project/allure-home/p11.png'
import p12 from '../../logos/project/allure-home/p12.png'
import p13 from '../../logos/project/allure-home/p13.png'
import p14 from '../../logos/project/allure-home/p14.png'
import p15 from '../../logos/project/allure-home/p15.png'
import p16 from '../../logos/project/allure-home/p16.png'
import p17 from '../../logos/project/allure-home/p17.png'
import p18 from '../../logos/project/allure-home/p18.png'
import p19 from '../../logos/project/allure-home/p19.png'
import p20 from '../../logos/project/allure-home/p20.png'

function AllureHomeProject() {

    const images = [ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
      }, [images]);
   

  return (
   <>
   <div className='main-container project-main-container' style={{ height:'auto', backgroundColor:''}} id="project" >
   <div className='row'>
   <p className='pr-sub-heading'>Something I'have build</p>
   <Divider variant='fullWidth' style={{marginBottom:20}} component="p"></Divider>
   </div>
   <div className="row project-container" style={{margin:0,}} >
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 project-image slideshow-container" style={{padding:0}} >
      
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        loading='lazy'
      />

      </div>
    
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 project-description " style={{padding:0}}>
          <p className='project-title'>E-commerce</p>
          <p className='project-heading'>Allure Home</p>
          <div className='project-body-allurehome'>
          <div className="about-container">
                  <p className="about-text" style={{color:'#f798a1'}}>About</p>
                </div>
                <div style={{margin:0, padding:'20px'}}>
                  <p className='project-content-description'>Step into a technically refined e-commerce realm with our platform, meticulously blending React and Node.js. </p>
                    <p className='project-content-description'>Our application delivers a seamless and secure shopping experience. The React-powered frontend ensures an intuitive interface, complemented by Google login authentication. Transactions are streamlined through the integration of the <b>Stripe payment gateway.</b> </p>
                     <p className='project-content-description'> On the backend, Node.js orchestrates a scalable server, while Node Mailer handles customer authentication via email verification. JSON Web Token (JWT) ensures robust customer authorization, enhancing security. Admins wield a potent admin panel, managing banner images, product categories, and real-time order status updates. It's more than an e-commerce platform</p>
                  </div>
                 <Accordion style={{borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px'}}>
                      <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                        <Typography><p className='project-content-description' style={{marginBottom:0}}>Demo Accounts</p></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="div">
                        {/* <div style={{backgroundColor:'gray', padding:'20px', borderBottomRightRadius:'15px', borderBottomLeftRadius:'15px'}}> */}
                  <p className='demo-heading'></p>
                  <p className='demo-text'><b >Admin</b> <br></br> <span style={{color:'black'}}>Email:</span> huzefakhan284@gmail.com <span style={{color:'black'}}>Password:</span> 1234</p>
                  <p className='demo-text'><b >Customer</b> <br></br> <span style={{color:'black'}}>Email:</span> huzefakhan9090@gmail.com <span style={{color:'black'}}>Password:</span> 1234</p>
                  {/* </div> */}
                        </Typography>
                      </AccordionDetails>
                </Accordion>
                
          </div>
          <p className='project-library'>
          react react-redux react-router-dom express mongoose bcrypt passport passport-google-oauth2 jsonwebtoken cors express-session nodemon multer nodemailer stripe
                </p>

        <Tooltip title="Live" arrow>
          <div className='live-button' onClick={() => window.open("https://allure-home.up.railway.app/", "_blank")}> 
           
          <LiveTvIcon/>
          </div>
        </Tooltip>
      </div>
   </div>
  
   </div>
   </>
  )
}

export default AllureHomeProject
