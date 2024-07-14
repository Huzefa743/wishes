import React from "react";
import Box from "@mui/material/Box";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import { IconButton} from "@mui/material";
import homeIcon from "../../logos/big-logo-rm.png";
import "./footer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "@mui/material/Divider";


const Footer = () => {
  return (
    <>
      <Box className="footer">
        <div className="row" height={"500px"} style={{ margin: 0, padding: 0 }}>
          <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 col-xs-3 footer-col-first">
            <p className="footer-heading">Company</p>
            <div
              style={{ margin: 0, padding: 0, marginTop: 5, marginBottom: 5 }}
            >
              <div style={{ margin: 0 }}>
                <IconButton aria-label="Facebook" href="https://www.facebook.com/yourpage">
                  <Facebook style={{ color: "#f798a1" }} />
                </IconButton>
                <IconButton aria-label="delete">
                  <Twitter style={{ color: "#f798a1" }} />
                </IconButton>
                <IconButton aria-label="delete">
                  <YouTube style={{ color: "#f798a1" }} />
                </IconButton>
                <IconButton aria-label="delete">
                  <Instagram style={{ color: "#f798a1" }} />
                </IconButton>
              </div>
            </div>
            <p className="footer-sub-heading">AllureHome by CraftsHome Studio Ltd.</p>
            <p className="footer-sub-heading">
              48, 1st Floot Center Point Building.
            </p>
            <p className="footer-sub-heading">
              Bhopal, Madhyapradesh-462010, India
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 col-xs-3 footer-col-second" id="contact">
            <p className="footer-heading">Contacts</p>
            <p className="footer-sub-heading">allurehome@gmail.com</p>
            <p className="footer-sub-heading">allurehomeinfo@gmail.com</p>
            <p className="footer-sub-heading">+91 74159 79849</p>
            <p className="footer-sub-heading">+91 70245 23774</p>
            <p className="footer-sub-heading">+91 89629 03516</p>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 footer-col-third">
            <p className="footer-heading">About</p>
            <p className="footer-sub-heading">Customised Furniture</p>
            <p className="footer-sub-heading">Classic Product</p>
            <p className="footer-sub-heading">Home delivery</p>
            <p className="footer-sub-heading">2D Planning</p>
            <p className="footer-sub-heading">Exterior Planning</p>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 footer-col-fourth">
            <p className="footer-heading">Account</p>
            <p className="footer-sub-heading">Testimonials</p>
            <p className="footer-sub-heading">Awards</p>
            <p className="footer-sub-heading">Certification</p>
            <p className="footer-sub-heading">Career</p>
          </div>
        </div>
        <Divider variant="middle" component="div" />
        {/* <div className="footer-divider" ></div> */}
        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-lg-6 col-sm-12 footer-bottom-first" style={{padding:0}}>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img
                  src={homeIcon}
                  className="footer-logo"
                  loading="lazy"
                  
                />
              </div>
              <div className="col-lg-9 col-md-6 col-sm-6">
                <p className="footer-bottom-description-copy">
                  &copy; 2023 AllureHome. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 footer-bottom-second">
            <div className="row">
              <p className="footer-bottom-description">
                PRIVACY POLICY &nbsp; &nbsp; | &nbsp;&nbsp; COOKIES &nbsp;&nbsp;
                | &nbsp;&nbsp; TERMS & CONDITIONS &nbsp;
              </p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Footer;
