import React, { useEffect, useState } from "react";
import "../../index.css";
import myavatar from "../../imgs/my-avatar.png";
import resume from "../../docs/Gaurav Soni Resume.pdf";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const LinkList = [
  {
    id: 1,
    icon: (
      <>
        <MailOutlineIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "Click to E-Mail",
    link: "mailto:gauravsoni8414@gmail.com",
  },
  {
    id: 2,
    icon: (
      <>
        <GitHubIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "Github Profile",
    link: "https://github.com/gauravsoni97",
  },
  {
    id: 3,
    icon: (
      <>
        <LinkedInIcon style={{ width: "1rem" }} />
      </>
    ),
    name: "Linkedin Profile",
    link: "https://www.linkedin.com/in/gauravsoni97/",
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

const Sidebar = () => {
  const isMobileDevice = useMediaQuery({ query: "(max-width: 1250px)" });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(true);
  }, []);

  useEffect(() => {
    if (!isMobileDevice) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [isMobileDevice]);

  return (
    <>
      <aside className="sidebar">
        {isMobileDevice && (
          <span className="showMenuIcon" onClick={toggleMenu}>
            {showMenu ? (
              <ExpandMoreRoundedIcon style={{ fontSize: "1.2rem" }} />
            ) : (
              <KeyboardArrowUpRoundedIcon style={{ fontSize: "1.2rem" }} />
            )}
          </span>
        )}
        <div className="sidebar-info">
          <figure className="avatar-box">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={myavatar}
              alt="Gaurav Soni"
              width="80px"
            />
          </figure>

          <motion.div
            className="info-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h1
              style={{ marginBottom: ".3rem" }}
              className="name"
              title="Gaurav Soni"
            >
              Gaurav Soni
            </h1>

            <p style={{ color: "gray", fontSize: ".8rem" }}>
              Frontend Web Developer
            </p>
            <motion.div
              className="sayHiSidebar"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <a
                href={"mailto:gauravsoni8414@gmail.com"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".5rem",
                  color: "#fff",
                }}
              >
                <WavingHandIcon style={{ width: "16px", color: "#ffda6b" }} />
                Say Hello !
              </a>
            </motion.div>
          </motion.div>
        </div>
        {!showMenu && (
          <motion.div
            className="sidebar-info_more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div
              className="separator"
              style={{
                maxWidth: `calc(100% - 2rem)`,
                margin: "1rem auto",
              }}
            ></div>

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
                        <p
                          style={{ color: "gray", marginLeft: "1rem" }}
                          className="inmobText"
                        >
                          {name}
                        </p>
                      </span>
                    </a>
                  </>
                );
              })}
            </ul>

            <div
              className="separator"
              style={{
                maxWidth: `calc(100% - 2rem)`,
                margin: "1rem auto",
              }}
            ></div>
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
          </motion.div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
