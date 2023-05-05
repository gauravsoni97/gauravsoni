import React from "react";
import "../../index.css";

const Sidebar = () => {
  return (
    <>
      <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
          <figure class="avatar-box">
            {/* <img src="./assets/images/my-avatar.png" alt="Gaurav Soni" width="80px"> */}
          </figure>

          <div class="info-content">
            <h1 class="name" title="Gaurav Soni">
              Gaurav Soni
            </h1>

            <p class="title">Frontend Web Developer</p>
          </div>

          <button class="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div class="sidebar-info_more">
          <div class="separator"></div>

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>

                <a href="mailto:gauravsoni8414@gmail.com" class="contact-link">
                  gauravsoni8414@gmail.com
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Phone No.</p>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=918053340056&amp;text=Thanks for reaching out to us via WhatsApp. I’ll get back to you shortly
        "
                >
                  <address>8053340056</address>
                </a>
              </div>
            </li>
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>

                <address>Rajasthan, India</address>
              </div>
            </li>
          </ul>

          <div class="separator"></div>

          <ul class="social-list">
            <li class="social-item">
              <a
                href="https://www.linkedin.com/in/thegauravsoni/"
                target="_blank"
                class="social-link"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li class="social-item">
              <a
                href="https://github.com/gauravsoni97"
                target="_blank"
                class="social-link"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            <li class="social-item">
              <a
                href="https://www.instagram.com/gauravsoni.97/"
                target="_blank"
                class="social-link"
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
