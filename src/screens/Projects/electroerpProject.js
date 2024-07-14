import React, {useState, useEffect} from 'react'
import './project.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Tooltip, Typography } from '@mui/material'
import p1 from '../../logos/project/electro-erp/p1.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import p2 from '../../logos/project/electro-erp/p2.png'
import p3 from '../../logos/project/electro-erp/p3.png'
import p4 from '../../logos/project/electro-erp/p4.png'
import p5 from '../../logos/project/electro-erp/p5.png';
import p6 from '../../logos/project/electro-erp/p6.png'
import p7 from '../../logos/project/electro-erp/p7.png'
import p8 from '../../logos/project/electro-erp/p8.png'
import p9 from '../../logos/project/electro-erp/p9.png'
import p10 from '../../logos/project/electro-erp/p10.png'
import p11 from '../../logos/project/electro-erp/p11.png'
import p12 from '../../logos/project/electro-erp/p12.png'
import p13 from '../../logos/project/electro-erp/p13.png'
import p14 from '../../logos/project/electro-erp/p14.png'
import p15 from '../../logos/project/electro-erp/p15.png'

function ElectroerpPorject() {

    const images = [ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];
      
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
   <div className='main-container electro-container'  >
   
   <div className="row project-container" style={{margin:0,}} >
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 project-image slideshow-container" style={{padding:0}} >
      
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        loading='lazy'
      />

      </div>
    
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 project-description " style={{padding:0}}>

          <p className='project-title'>ERP System</p>
          <p className='project-heading'>Tesla Electro ERP</p>
          <div className='project-body-electroerp'>
          <div className="about-container">
                  <p className="about-text" style={{color:'#0059BF'}}>About</p>
                </div>
                <div style={{margin:0, padding:'20px'}}>
                  <p className='project-content-description'>Introducing Electro ERP Tool, a comprehensive Node.js, React, Express, and MongoDB-powered ERP solution tailor-made for Tesla Transformer Pvt. Ltd. This application revolutionizes the customer experience by facilitating streamlined quotation processes. Users can effortlessly request quotes based on specific transformer types and configurations, receiving detailed pricing and standardized quotation documents.</p>
                     <p className='project-content-description'>The platform extends its capabilities to handle post-quotation processes through a dedicated Enquiries section. Users can create, customize, and manage enquiries, generating work orders for multi-phase products. The system ensures precise documentation, automating the creation of standard receipts at defined intervals.</p>
                     <p className='project-content-description'>Moving beyond, Electro ERP Tool introduces a sophisticated SOP (Standard Operating Procedure) module, orchestrating real-time manufacturing decisions based on available factory materials. The application's versatile BOM (Bill of Materials) section assigns unique design IDs to products, optimizing quality and manufacturing considerations.</p>
                 
                     <p className='project-content-description'> While Electro ERP Tool continues its development journey, it already stands as a robust ERP solution, revolutionizing operational efficiency and documentation for Tesla Transformer Pvt. Ltd.</p>
                 
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
          react-redux
          react-router-dom
          react-icons
          docxtemplater
          react-hook-form
          cryptr
          </p>

        <Tooltip title="Try it out" arrow>
          <div className='live-button' onClick={() => window.open("https://electroerp.up.railway.app/", "_blank")}> 
           
          <LiveTvIcon/>
          </div>
        </Tooltip>
      </div>
   </div>
  
   </div>
   </>
  )
}

export default ElectroerpPorject
