import React, {useState, useEffect} from 'react'
import './project.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Tooltip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import p1 from '../../logos/project/crafts-home/p1.png'
import p2 from '../../logos/project/crafts-home/p2.png'
import p3 from '../../logos/project/crafts-home/p3.png'
import p4 from '../../logos/project/crafts-home/p4.png'
import p5 from '../../logos/project/crafts-home/p5.png';
import p7 from '../../logos/project/crafts-home/p7.png'
import p8 from '../../logos/project/crafts-home/p8.png'
import p9 from '../../logos/project/crafts-home/p9.png'
import p10 from '../../logos/project/crafts-home/p10.png'
import p11 from '../../logos/project/crafts-home/p11.png'
import p12 from '../../logos/project/crafts-home/p12.png'
import p13 from '../../logos/project/crafts-home/p13.png'
import p14 from '../../logos/project/crafts-home/p14.png'
import p15 from '../../logos/project/crafts-home/p14.png'
import p16 from '../../logos/project/crafts-home/p14.png'
import p17 from '../../logos/project/crafts-home/p14.png'

function CarftsHomePorject() {

    const images = [ p1, p2, p3, p4, p5,  p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17];
    
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
   <div className='main-container' style={{paddingBottom:'100px', }} >
   
   <div className="row project-container" style={{margin:0,}} >
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 project-image slideshow-container" style={{padding:0}} >
      
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        loading='lazy'
      />

      </div>
    
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 project-description " style={{padding:0}}>

          <p className='project-title'>Website</p>
          <p className='project-heading'>Crafts Home</p>
          <div className='project-body-craftshome'>
          <div className="about-container">
                  <p className="about-text" style={{color:'#55766f'}}>About</p>
                </div>
                <div style={{margin:0, padding:'20px'}}>
                  <p className='project-content-description'>Introducing a compelling Node.js and React-based static website designed for Crafts Home—an interior and exterior design firm led by architects and engineers. This visually stunning platform showcases their exemplary work, company details, and client testimonials.</p>
                     <p className='project-content-description'>The website seamlessly caters to diverse screen sizes, providing a fully responsive experience. Clients can conveniently inquire about available products, and thanks to integrated nodemailer functionality, the team can promptly respond to messages.</p>
                     <p className='project-content-description'> Crafts Home's static website combines aesthetics with functionality, offering an engaging and accessible platform for clients to explore the firm's expertise in crafting beautiful and functional spaces.</p>
                  </div>

          </div>
          <p className='project-library'>
          react
          react-redux
          react-router-dom
          react-responsive-carousel
          react-bootstrap
          @react-hook/window-size
          @mui/material
          axios
          nodemailer
          express
          cors
            </p>

        <Tooltip title="Try it out" arrow>
          <div className='live-button' onClick={() => window.open("https://craftshomes.up.railway.app/", "_blank")}> 
           
          <LiveTvIcon/>
          </div>
        </Tooltip>
      </div>
   </div>
  
   </div>
   </>
  )
}

export default CarftsHomePorject
