import React, {useState, useEffect} from 'react'
import './project.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Tooltip, Typography } from '@mui/material'
import p1 from '../../logos/project/tender-trackr/p1.png'
import p2 from '../../logos/project/tender-trackr/p2.png'
import p3 from '../../logos/project/tender-trackr/p3.png'
import p4 from '../../logos/project/tender-trackr/p4.png'
import p5 from '../../logos/project/tender-trackr/p5.png';
import p6 from '../../logos/project/tender-trackr/p6.png'
import p7 from '../../logos/project/tender-trackr/p7.png'
import p8 from '../../logos/project/tender-trackr/p8.png'
import p9 from '../../logos/project/tender-trackr/p9.png'
import p10 from '../../logos/project/tender-trackr/p10.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function TenderTrackerProject() {

    const images = [ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
    
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
   <div className='main-container project-main-container'  >
   
   <div className="row project-container" style={{margin:0,}} >
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 project-image slideshow-container" style={{padding:0}} >
      
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        loading='lazy'
      />

      </div>
    
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 project-description " style={{padding:0}}>

          <p className='project-title'>Construction Management Software</p>
          <p className='project-heading'>Tender Trackr</p>
          <div className='project-body-tendertrackr'>
          <div className="about-container">
                  <p className="about-text" style={{color:'#21ad01'}}>About</p>
                </div>
                <div style={{margin:0, padding:'20px'}}>
                  <p className='project-content-description'>Tender Trackr, a robust Node.js and React-based application that streamlines construction tender management & ensuring a seamless user experience across all devices,. This comprehensive solution facilitates the creation of customers and their respective sites, each encompassing diverse work categories like POP, tiles, furniture, construction, and renovation.</p>
                     <p className='project-content-description'> Track project progress by updating site statuses, recording materials and labor usage. Efficiently manage financials, monitoring customer credits, site expenses, and overall profitability.</p>
                     <p className='project-content-description'> The application empowers users to download detailed project histories in Excel format, ensuring seamless record-keeping and analysis. Tender Trackr offers a dynamic and user-friendly interface for efficient construction tender administration.</p>
                  </div>
                 <Accordion style={{borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px'}}>
                      <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                        <Typography><p className='project-content-description' style={{marginBottom:0}}>Demo Accounts</p></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="div">
                        {/* <div style={{backgroundColor:'gray', padding:'20px', borderBottomRightRadius:'15px', borderBottomLeftRadius:'15px'}}> */}
                  <p className='demo-heading'></p>
                  <p className='demo-text'><b >Admin</b> <br></br> <span style={{color:'gray'}}>Email:</span> tendertrackr@gmail.com <span style={{color:'gray'}}>Password:</span> 1234</p>
                  {/* <p className='demo-text'><b >Customer</b> <br></br> <span style={{color:'black'}}>Email:</span> huzefakhan9090@gmail.com <span style={{color:'black'}}>Password:</span> 1234</p> */}
                  {/* </div> */}
                        </Typography>
                      </AccordionDetails>
                </Accordion>
                
          </div>
          <p className='project-library'>
          react
          react-redux
          react-router-dom
          @mui/material
          axios 
          bcrypt
          cors
          cryptr
          deep-email-validator
          docxtemplater
          excel-js 
          mongoose
          xlsx
            </p>

        <Tooltip title="Live" arrow>
          <div className='live-button' onClick={() => window.open("https://tendertrackr.up.railway.app/", "_blank")}> 
           
          <LiveTvIcon/>
          </div>
        </Tooltip>
      </div>
   </div>
  
   </div>
   </>
  )
}

export default TenderTrackerProject
