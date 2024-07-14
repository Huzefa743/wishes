import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const GmailLinks = () => {
    const text = 'huzefakhan284@gmail.com';

    const phoneNumber = '8819996132'; 
    const email = 'huzefakhan284@gmail.com';

    const redirectToWhatsApp = () => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, '_blank');
    };
    const redirectToEmail = () => {
        const emailUrl = `mailto:${email}`;
        window.open(emailUrl, '_blank');
      };
      const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
      };

  return (
    <div className="d-none d-md-block" style={{ position: 'fixed', textAlign: 'center', right: '45px', top: '70%', transform: 'translateY(-50%)' }}>
     
     <div onClick={redirectToEmail} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {text.split('').map((char, index) => (
        <p key={index} style={{ transform: 'rotate(90deg)', cursor:'pointer', margin: 0, padding: 0, whiteSpace: 'nowrap', lineHeight:'13px', fontWeight:'500'}}>
          {char}
        </p>
      ))}
    </div>

    </div>
  );
};

export default GmailLinks;
