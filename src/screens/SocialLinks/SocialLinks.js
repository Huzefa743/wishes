import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaIcons = () => {
 

  return (
    <div className="d-none d-md-block" style={{ position: 'fixed', textAlign: 'center', left: '25px', top: '70%', transform: 'translateY(-50%)' }}>
      <List component="nav" aria-label="social media icons">
        <ListItem >
          <ListItemIcon onClick={() => window.open("https://github.com/huzefa743", "_blank")}>
            <GitHubIcon fontSize={'large'}  sx={{ 
                 '&:hover': {
                    color: '#1a84ff', // Change to the desired hover color
                    transform: 'translateY(-2px)', // Move the icon up on hover
                    transition: 'transform 0.3s ease, color 0.3s ease', // Add smooth transitions for both color and transform
                    backgroundColor: 'white', // Change the background color on hover if needed
                  },
                   color:'black',
                   mb:2
                
                }}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem >
          <ListItemIcon  onClick={() => window.open("www.linkedin.com/in/huzefa-mern", "_blank")}>
            <LinkedInIcon  fontSize={'large'}  sx={{ 
                 '&:hover': {
                    color: '#1a84ff', // Change to the desired hover color
                    transform: 'translateY(-2px)', // Move the icon up on hover
                    transition: 'transform 0.3s ease, color 0.3s ease', // Add smooth transitions for both color and transform
                    backgroundColor: 'white', // Change the background color on hover if needed
                  },
                   color:'black',
                   mb:2
                }}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem >
          <ListItemIcon onClick={() => window.open("https://www.instagram.com/huzefa743/", "_blank")} >
            <InstagramIcon fontSize={'large'}  sx={{ 
                 '&:hover': {
                    color: '#1a84ff', // Change to the desired hover color
                    transform: 'translateY(-2px)', // Move the icon up on hover
                    transition: 'transform 0.3s ease, color 0.3s ease', // Add smooth transitions for both color and transform
                    backgroundColor: 'white', // Change the background color on hover if needed
                  },
                   color:'black',
                   mb:2
                
                }}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem >
          <ListItemIcon onClick={() => window.open("https://twitter.com/huzefa_mern", "_blank")} sx={{
             '&:hover': {
              color: '#1a84ff', // Change to the desired hover color
              transform: 'translateY(-2px)', // Move the icon up on hover
              transition: 'transform 0.3s ease, color 0.3s ease', // Add smooth transitions for both color and transform
              backgroundColor: 'white', // Change the background color on hover if needed
            },
          }}>
            <FaSquareXTwitter className='twitterIcon'   />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      
    </div>
  );
};

export default SocialMediaIcons;
