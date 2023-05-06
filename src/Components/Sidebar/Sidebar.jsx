import React from "react";
import "../../index.css";

import myavatar from "../../imgs/my-avatar.png"
import resume from "../../docs/Gaurav Soni Frontend Developer .pdf";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={myavatar} alt="Gaurav Soni" width="80px" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Gaurav Soni">
              Gaurav Soni
            </h1>

            <p className="title">Frontend Web Developer</p>
          </div>

          <button className="info_more-btn">
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
              <MailOutlineIcon/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a
                  href="mailto:gauravsoni8414@gmail.com"
                  className="contact-link"
                >
                  gauravsoni8414@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <WhatsAppIcon/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone No.</p>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=918053340056&amp;text=Thanks for reaching out to us via WhatsApp. I’ll get back to you shortly
        "
                >
                  <address>8053340056</address>
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <LocationOnIcon/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Rajasthan, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>
          <div className="info-content">
            <p className="title" style={{ display:"flex", alignItems:"center"}}>

            <DownloadRoundedIcon style={{width:"16px"}}/>
              <a href={resume} download style={{color:"white", marginLeft:".5rem"}}>
              Download CV
              </a>
              </p>
          </div>

          
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
