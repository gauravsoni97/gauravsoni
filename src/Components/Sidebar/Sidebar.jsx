import React from "react";
import "../../index.css";

import myavatar from "../../imgs/my-avatar.png";
import resume from "../../docs/Gaurav Soni Frontend Developer .pdf";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const LinkList = [
  {
    id: 1,
    icon: (
      <>
        <MailOutlineIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "Email",
    link: "mailto:gauravsoni@gmail.com",
  },
  {
    id: 2,
    icon: (
      <>
        <GitHubIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "Github",
    link: "https://github.com/gauravsoni97",
  },
  {
    id: 3,
    icon: (
      <>
        <LinkedInIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "Linkedin",
    link: "https://www.linkedin.com/in/thegauravsoni/",
  },
  {
    id: 4,
    icon: (
      <>
        <WhatsAppIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "WhatsApp",
    link: `https://api.whatsapp.com/send?phone=918053340056&amp;text=Thanks for
        reaching out to us via WhatsApp. I’ll get back to you shortly`,
  },
];

const showcontent = () => {};

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
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
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="linklistmenu">
            {(LinkList || []).map((ele) => {
              const { id, icon, name, link } = ele;
              return (
                <>
                  <a
                    target="_blank"
                    href={link}
                    style={{
                      color: "hsla(0, 0%, 84%, 0.7)",
                      fontSize: ".9rem",
                      marginLeft: ".8rem",
                    }}
                    className="linkname"
                  >
                    <span
                      key={id}
                      className="links"
                      style={{
                        color: "hsl(45, 100%, 71%)",
                        display: "flex",
                        alignItems: "center",
                        margin: ".6rem 0",
                      }}
                    >
                      <span className="icon-style">{icon}</span>
<p style={{color:'gray', marginLeft:'1rem'}} className="inmobText">

                      {name}
</p>
                    </span>
                  </a>
                </>
              );
            })}
          </ul>

          <div className="separator"></div>
          <div className="info-content downloadresume">
            <p
              className="title"
              style={{ display: "flex", alignItems: "center" }}
            >
              <DownloadRoundedIcon style={{ width: "16px" }} />
              <a
                href={resume}
                download
                style={{ color: "white", marginLeft: ".5rem" }}
              >
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
