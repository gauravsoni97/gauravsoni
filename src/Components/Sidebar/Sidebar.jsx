import React from "react";
import "../../index.css";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            {/* <img src="./assets/images/my-avatar.png" alt="Gaurav Soni" width="80px"> */}
          </figure>

          <div className="info-content">
            <h1 className="name" title="Gaurav Soni">
              Gaurav Soni
            </h1>

            <p className="title">Frontend Web Developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:gauravsoni8414@gmail.com" className="contact-link">
                  gauravsoni8414@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="logo-whatsapp"></ion-icon>
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
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Rajasthan, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/thegauravsoni/"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://github.com/gauravsoni97"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.instagram.com/gauravsoni.97/"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
