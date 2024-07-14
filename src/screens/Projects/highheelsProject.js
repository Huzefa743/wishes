import React, {useState, useEffect} from 'react'
import './project.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Tooltip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import p1 from '../../logos/project/high-heels/p1.png'
import p2 from '../../logos/project/high-heels/p2.png'
import p3 from '../../logos/project/high-heels/p3.png'
import p4 from '../../logos/project/high-heels/p4.png'
import p5 from '../../logos/project/high-heels/p5.png';
import p6 from '../../logos/project/high-heels/p6.png'
import p7 from '../../logos/project/high-heels/p7.png'
import p8 from '../../logos/project/high-heels/p8.png'
import p9 from '../../logos/project/high-heels/p9.png'
import p10 from '../../logos/project/high-heels/p10.png'
import p11 from '../../logos/project/high-heels/p11.png'
import p12 from '../../logos/project/high-heels/p12.png'
import p13 from '../../logos/project/high-heels/p13.png'
import p14 from '../../logos/project/high-heels/p14.png'

function HighheelsProject() {

    const images = [ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];
    
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
   <div className='main-container highheels-details'  >
   
   <div className="row project-container" style={{margin:0,}} >
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 project-image slideshow-container" style={{padding:0}} >
      
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        loading='lazy'
      />

      </div>
    
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 project-description " style={{padding:0}}>

          <p className='project-title'>Inventory System</p>
          <p className='project-heading'>High Heels Inventory</p>
          <div className='project-body-highheels'>
          <div className="about-container">
                  <p className="about-text" style={{color:'#d3302f'}}>About</p>
                </div>
                <div style={{margin:0, padding:'20px'}}>
                  <p className='project-content-description'>Presenting HighHeels, a dynamic Node.js, React, Express, and MongoDB-based inventory management system designed for shoe shops. This intuitive application empowers clients to efficiently handle stock, sales, and salesmen records. Admins can seamlessly create and manage stock by adding brand, article details, quantity, vendors, date, MRP, and actual prices. Salesmen can record sales with precise details, including the time and price of each sold article.</p>
                     <p className='project-content-description'>HighHeels features an insightful dashboard with analytics, allowing admins to monitor each salesman's contribution, track the last 7 days' sales, and view monthly sales figures. The dashboard provides an overview of the overall profile and available stock pricing, ensuring comprehensive control and analysis for efficient inventory management.</p>
                     <p className='project-content-description'>The responsive UI contributes to the accessibility and convenience of managing inventory, making HighHeels a versatile and efficient solution for shoe shop clients.</p>
                  </div>
                 <Accordion style={{borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px'}}>
                      <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                        <Typography><p className='project-content-description' style={{marginBottom:0}}>Demo Accounts</p></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="div">
                        {/* <div style={{backgroundColor:'gray', padding:'20px', borderBottomRightRadius:'15px', borderBottomLeftRadius:'15px'}}> */}
                  <p className='demo-heading'></p>
                  <p className='demo-text'><b >Admin</b> <br></br> <span style={{color:'gray'}}>Email:</span> admin@gmail.com <span style={{color:'gray'}}>Password:</span> 1234</p>
                  {/* <p className='demo-text'><b >Customer</b> <br></br> <span style={{color:'black'}}>Email:</span> huzefakhan9090@gmail.com <span style={{color:'black'}}>Password:</span> 1234</p> */}
                  {/* </div> */}
                        </Typography>
                      </AccordionDetails>
                </Accordion>
          </div>
          <p className='project-library'>
          express
          mongoose
          jsonwebtoken
          bcrypt
          cors
          react
          react-router-dom
          react-redux
          bootstrap
          uuid
          cryptr
          fs
          </p>

        <Tooltip title="Try it out" arrow>
          <div className='live-button' onClick={() => window.open("https://high-heels.up.railway.app/", "_blank")}> 
           
          <LiveTvIcon/>
          </div>
        </Tooltip>
      </div>
   </div>
  
   </div>
   </>
  )
}

export default HighheelsProject
