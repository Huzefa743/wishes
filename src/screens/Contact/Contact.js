import React, {useState, useEffect} from 'react'
import './contact.css'
import { Button, List, TextField, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material'
import Lottie from 'react-lottie';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import * as API from "../../apiservice/services";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import gmail from '../../logos/icons8-gmail.svg'
import whatsapp from '../../logos/whatsapp.svg'
import address from '../../logos/address.png'

function Contact() {

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


      
        //---------------------add new contact-------------------------------------
const [createContactRequestMessage, setCreateContactRequestMessage] = useState("");
const [contactErrorVisible, setContactErrorVisible] = useState(false);
const [disabledContactFormFields, setDisabledContactFormFields] = useState(false);
const [contactLoaderVisible, setContactLoaderVisible] = useState(false);
const [contactFormFields, setContactFormFields] = useState({
 
  name: '',
  email: '',
  mobile: '8819996132',
  description: '',
});

const handleContactFormChange = (event) => {
  let data = { ...contactFormFields };
  data[event.target.name] = event.target.value;
  setContactFormFields(data);
};

const addContact = async () => {
  setContactLoaderVisible(true);
  console.log("Add contact function called", contactFormFields);

  API.createContactEnquiry(contactFormFields)
    .then(async (res) => {
      setContactLoaderVisible(false);
      console.log("Response for create contact request form ", res);
     
      setCreateContactRequestMessage(res.data.message);
      setContactErrorVisible(true);
      setTimeout(() => {
        setContactErrorVisible(false);
      }, 2000);
      let data = {
        name: '',
        email: '',
        mobile: '',
        description: '',
      };

      setContactFormFields(data);
    })
    .catch((err) => {
      setContactLoaderVisible(false);
      console.log("Error response for create contact!! ", err);
      setCreateContactRequestMessage(err.response.data.message);
      setContactErrorVisible(true);
      setTimeout(() => {
        setContactErrorVisible(false);
      }, 2000);
     
      let data = {
        name: '',
  email: '',
  mobile: '',
  description: '',
      };

      setContactFormFields(data);

    });
};
   

  return (
   <>
  
   <div className="row main-container" id="contact" style={{paddingBottom:50}} >
   <div className="contact-heading-container">
      <p className="contact-text" style={{marginBottom:'100px'}}>Contact</p>
    </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-list">
        <p style={{fontSize:22, fontWeight:700}}>Drop Me a Message</p>
        <p style={{fontSize:14, color:'gray'}}>
Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        <List style={{marginTop:'10px'}} >
        <ListItem  key="Home" disablePadding   sx={{ borderRadius:'5px', backgroundColor: "",  "&.active": { backgroundColor: "white", },  }}
        >
          <ListItemButton  >
            <ListItemIcon onClick={redirectToWhatsApp} >
              {/* <PermPhoneMsgIcon  sx={{ color: " #1a84ff", fontSize:'40px' }}
               /> */}
               <img src={whatsapp} loading='lazy'></img>
            </ListItemIcon>
            <ListItemText  primary="+91 8819996132" style={{ color: "black", fontWeight:"bl", marginLeft:"20px" }}
               >
        
              </ListItemText>
              <IconButton onClick={() => copyToClipboard(`${phoneNumber}`)}>
            <FileCopyIcon />
          </IconButton>
          </ListItemButton>
         
        </ListItem>
        <ListItem key="Home" disablePadding   sx={{ borderRadius:'5px', backgroundColor: "",  "&.active": { backgroundColor: "white", },  }}
        >
          <ListItemButton >
            <ListItemIcon onClick={redirectToEmail}>
                <img src={gmail} loading='lazy'></img>
              {/* <MailIcon  sx={{ color: " #1a84ff", fontSize:'40px' }}
               /> */}
            </ListItemIcon>
            <ListItemText  primary="huzefakhan284@gmail.com" style={{ color: "black", fontWeight:"bl", marginLeft:"20px" }}
               >
              
              </ListItemText>
              <IconButton onClick={() => copyToClipboard(`${email}`)}>
            <FileCopyIcon />
          </IconButton>
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding   sx={{ borderRadius:'5px', backgroundColor: "",  "&.active": { backgroundColor: "white", },  }}
        >
          <ListItemButton>
            <ListItemIcon>
              {/* <PlaceIcon  sx={{ color: " #1a84ff", fontSize:'40px' }}
               /> */}
               <img src={address} loading='lazy'></img>
            </ListItemIcon>
            <ListItemText  primary="27/2, D-sector Street no. 03 Bagh Umrao Dulha Bhopal - 462010" style={{ color: "black", fontWeight:"bl", marginLeft:"20px" }}
               >
        
              </ListItemText>
          </ListItemButton>
        </ListItem>
      
      </List>

      </div>

      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-form">
      {contactErrorVisible ? 
              <div style={{padding:10, backgroundColor:'#1a84ff', borderRadius:5, textAlign:'center'}}>
              <p style={{fontSize:16, color:'white',  padding:0, margin:0}}>"Message sent"</p>
        </div>
             
              :<></>}

      <TextField
                          size="small"
                          style={{ backgroundColor: "white", color: "white" }}
                          margin="dense"
                          name="name"
                          onChange={event => handleContactFormChange(event)} 
                          value={contactFormFields?.name}
                          label="Enter your Name"
                          placeholder="John Smith"
                          type="email"
                          fullWidth
                          variant="filled"
                        //   InputLabelProps={{
                        //     style: {
                        //       color: "#55766f", // Change this to your desired label color
                        //     },
                        //   }}
                        //   InputProps={{
                        //     style: {
                        //       color: "#55766f", // Change text color
                        //       borderColor: "#55766f",
                        //     },
                        //     focused: {
                        //       borderColor: "#55766f", // Change focus border color
                        //       color: "#55766f", // Change text color
                        //     },
                        //   }}
                        />
                        <TextField
                          size="small"
                          style={{ backgroundColor: "white", color: "white" }}
                          margin="dense"
                          name="email"
                          onChange={event => handleContactFormChange(event)} 
                          value={contactFormFields?.email}
                          label="Enter your email address"
                          placeholder="username@xxxx.com"
                          type="email"
                          fullWidth
                          variant="filled"
                        //   InputLabelProps={{
                        //     style: {
                        //       color: "#55766f", // Change this to your desired label color
                        //     },
                        //   }}
                        //   InputProps={{
                        //     style: {
                        //       color: "#55766f", // Change text color
                        //       borderColor: "#55766f",
                        //     },
                        //     focused: {
                        //       borderColor: "#55766f", // Change focus border color
                        //       color: "#55766f", // Change text color
                        //     },
                        //   }}
                        />
                        {/* <TextField
                          size="small"
                          style={{ backgroundColor: "white", color: "white" }}
                          margin="dense"
                          name="mobile"
                          onChange={event => handleContactFormChange(event)} 
                          value={contactFormFields?.mobile}
                          label="Enter your Mobile Number"
                          placeholder="9876543210"
                          type="number"
                          fullWidth
                          variant="filled"
                        //   InputLabelProps={{
                        //     style: {
                        //       color: "#55766f", // Change this to your desired label color
                        //     },
                        //   }}
                        //   InputProps={{
                        //     style: {
                        //       color: "#55766f", // Change text color
                        //       borderColor: "#55766f",
                        //     },
                        //     focused: {
                        //       borderColor: "#55766f", // Change focus border color
                        //       color: "#55766f", // Change text color
                        //     },
                        //   }}
                        /> */}
                        <TextField
                          size="small"
                          style={{ backgroundColor: "white", color: "white" }}
                          margin="dense"
                          name="description"
                          onChange={event => handleContactFormChange(event)} 
                          value={contactFormFields?.description}
                          label="Message"
                          placeholder="Message"
                          type="text"
                          rows={3}
                          multiline={true}
                          fullWidth
                          variant="filled"
                        //   InputLabelProps={{
                        //     style: {
                        //       color: "#55766f", // Change this to your desired label color
                        //     },
                        //   }}
                        //   InputProps={{
                        //     style: {
                        //       color: "#55766f", // Change text color
                        //       borderColor: "#55766f",
                        //     },
                        //     focused: {
                        //       borderColor: "#55766f", // Change focus border color
                        //       color: "#55766f", // Change text color
                        //     },
                        //   }}
                        />

                        <Button
                          size="small"
                          sx={{ textTransform: "capitalize", backgroundColor:'#1a84ff', color:'white', marginTop:'15px', ':hover':{backgroundColor:'#1a84ff'} }}
                         
                          onClick={()=>addContact()}
                           disabled={contactFormFields.name=="" || disabledContactFormFields  || contactFormFields.description=="" || contactFormFields.mobile=="" || contactFormFields.email=="" }
                        >
                          Send Message
                        </Button>
      </div>
   </div>
   <Divider variant='fullWidth' style={{marginBottom:20}} component="p"></Divider>
   <div style={{textAlign:'center', fontSize:'14px', color:'gray'}}>
   <p>2023 - Huzefa Khan, All right reserved</p>
   </div>
   </>
  )
}

export default Contact
