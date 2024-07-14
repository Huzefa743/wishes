import react ,{useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
 import logo from "../../logos/main-logo.png"
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactsIcon from '@mui/icons-material/Contacts';
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  SwipeableDrawer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import './header.css';
import InboxIcon from "@mui/icons-material/MoveToInbox";

import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CategoryIcon from "@mui/icons-material/Category";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Logout, Search } from "@mui/icons-material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Fade from '@mui/material/Fade';
import Backdrop from "@mui/material/Backdrop";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import * as API from "../../apiservice/services";
// import { useFavoriteCount } from "../context/FavoriteCountContext";
// import { useCartCount } from "../context/CartCountContext";
// import SearchBar from "../SearchBar/SearchBar";
import { Col, Row } from "react-bootstrap";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Brightness4Icon from '@mui/icons-material/Brightness4';


const pages = ["Home", "About us", "Explore Work", "Shop", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];






function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const { favoriteCount } = useFavoriteCount()
  // const { cartCount } = useCartCount()

  // -----search--------------------

  const contactScroll = () => {
    const section7 = document.getElementById("contact");
    if (section7) {
      section7.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const aboutScroll = () => {
    const section7 = document.getElementById("about");
    if (section7) {
      section7.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const projectScroll = () => {
    const section7 = document.getElementById("project");
    if (section7) {
      section7.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

//-----------------close---------

// ----------code for menu profile handle------------
const [backdropOpen, setBackdropOpen] = useState(false);
const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const anchorOrigin = {
    vertical: "bottom",
    horizontal: "right",
  };
  
  const transformOrigin = {
    vertical: "top",
    horizontal: "right",
  };

//-----------close code for menu profile handle-----------

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const scrollToSection6 = () => {
    const section6 = document.getElementById("section6");
    if (section6) {
      section6.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  

  // -----------------------drawer for header---------------------
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "white",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      <List sx={{ color: "white", justifyContent:'center', textAlign:'center' }}>
        <ListItem key="Home" disablePadding onClick={aboutScroll}>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText style={{fontSize:14, fontWeight:500, color:'black'}} primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding onClick={projectScroll}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText style={{fontSize:14, fontWeight:500, color:'black'}} primary="Project" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding onClick={contactScroll}>
          <ListItemButton>
            <ListItemIcon>
              <ContactsIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText style={{fontSize:14, fontWeight:500, color:'black'}} primary="Contact" />
          </ListItemButton>
        </ListItem>
     
      </List>
      <Divider component="list" />
      <div style={{ marginTop:'200px', display: 'flex', justifyContent: 'center' }}>
                   
                   <div style={{ }}>
                          <IconButton aria-label="delete" onClick={() => window.open("https://github.com/huzefa743", "_blank")} >
                               <GitHubIcon style={{color:'black'}} />
                           </IconButton>
                           <IconButton aria-label="delete" onClick={() => window.open("www.linkedin.com/in/huzefa-mern", "_blank")}>
                               <LinkedInIcon style={{color:'black'}} />
                           </IconButton>
                           <IconButton aria-label="delete" onClick={() => window.open("https://twitter.com/huzefa_mern", "_blank")}>
                               <FaSquareXTwitter style={{color:'black', fontSize:24}} />
                           </IconButton>
                           
                           <IconButton aria-label="delete" onClick={() => window.open("https://www.instagram.com/huzefa743/", "_blank")} >
                               <InstagramIcon style={{color:'black'}}/>
                           </IconButton>
                   </div>
                 
               </div>
      


    </Box>
  );

  //----------------------close drawer----------------------
  //service integration
  function logOutExec(){
    console.log("log out is working...")
    window.localStorage.clear();
    navigate('/')
  }




  useEffect(() => {
  
  }, []);




  return (
    <AppBar position="static" style={{ backgroundColor: "white" }} >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* <AdbIcon  /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ff4d6a",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              height="50px" // Adjust the size as needed
              width="60px" // Keep the width and height the same
              alt={"Main-Icon"}
              loading="lazy"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              
            ></img>
           
          </Typography>

          {/* -----------for mobile view screen-------- */}
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
            
          >
            {list("left")}
          </SwipeableDrawer>
       
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <img
               src={logo}
              height="35px" // Adjust the size as needed
              width="40px" // Keep the width and height the same
              alt={"Main-Icon"}
               
              loading="lazy"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            ></img>

        
           
            <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              "& > *": {
                marginLeft: "50px", // Add space between icons
              },
             
            }}
          >
         
         {/* carts icon */}
        
       

        <IconButton
          color="inherit"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon style={{color:'black', fontSize:'20px'}} />
        </IconButton>
           
          </Box>
          </Box>
           {/* ------------mobile view end------------ */}
           {/* -------------desktop view start-------- */}

          <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              "& > *": {
                marginLeft: "15px", // Add space between icons
              },
              display: { xs: 'none', md: 'flex'  } 
            }}
          >
           
        <Button
          key="about"
          onClick={aboutScroll}
          sx={{
            mr: 1,
            my: 1,
            ml:5,
            textTransform: "capitalize",
            color: "black",
            display: "block",
            fontWeight: 600,
            "&:hover": {
              color: "#1a84ff", // Change the hover color
              backgroundColor:'white',
              transform: 'translateY(-2px)', // Move the icon up on hover
                    transition: 'transform 0.01s ease, color 0.01s ease',
            },
          }}
          
        >
          About
        </Button>
        <Button
          key="projects"
          onClick={projectScroll}
          sx={{
            mr: 0,
            my: 1,
            ml:2,
            textTransform: "capitalize",
            color: "black",
            display: "block",
            fontWeight: 600,
            "&:hover": {
              color: "#1a84ff", // Change the hover color
              backgroundColor:'white',
              transform: 'translateY(-2px)', // Move the icon up on hover
                    transition: 'transform 0.01s ease, color 0.01s ease',
            },
          }}
          
        >
          Projects
        </Button>
        <Button
          key="contact"
          onClick={contactScroll}
          sx={{
            mr: 3,
            my: 1,
            ml:2,
            textTransform: "capitalize",
            color: "black",
            display: "block",
            fontWeight: 600,
            "&:hover": {
              color: "#1a84ff", // Change the hover color
              backgroundColor:'white',
              transform: 'translateY(-2px)', // Move the icon up on hover
                    transition: 'transform 0.01s ease, color 0.01s ease',
            },
          }}
          
        >
          Contact
        </Button>
       
         
         {/* carts icon */}
       
        {/* <IconButton color="inherit" 
        sx={{ backgroundColor: "white",  "&.active": { backgroundColor: "#f798a1", }, "&:hover": { color: "#1a84ff",}, }}
        className={window.location.pathname === "/profie" ? "active" : ""}
          aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        >
          <Brightness4Icon sx={{ color: "black", "&.active": { color: "white", }, "&:hover": { color: "#1a84ff",},}}
              className={window.location.pathname === "/profile" ? "active" : ""}/>
        </IconButton> */}
           
       
      
          </Box>
           {/* ------------desktop view end--------------- */}
         
          {/* </Menu> */}
        {/* </Box> */} 
        </Toolbar>
      </Container>

      {/* icon detials */}
  
    

    </AppBar>
  );
}
export default Header;
