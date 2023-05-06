import React from "react";
import "../../../index.css";

import googlekeepclone from "../../../imgs/projects/googlekeepclone.png"
import moneymanagement from "../../../imgs/projects/moneymanagement.png"
import macosui from "../../../imgs/projects/macosui.png"
import macosui2 from "../../../imgs/projects/macosui2.png"

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <div className="filter-select-box">
          <button data-select />
        </div>
        {/*------------ all projects here to show --------------*/}
        <div className="all-projects">
          {/* Project 1 */}
          <div className="project_box  service-item ">
            <div className="project_img1 project_img" style={{backgroundImage:`url(${googlekeepclone})`}}>
              
            </div>
            <div className="project-desc">
              <h2>Google Keep Clone</h2>
              <p className="timeline-text">
                Designed the exact user interface and developed this clone using
                ReactJs. This is a web-based note-taking app that allows users
                to create, edit, and organize notes.
              </p>
              <br />
              <h4>Features</h4>
              <div className="project_features_box">
                <p className="project_features timeline-text">
                  ✯ Users can create new notes with a title and a body.
                </p>
              </div>
              <div className="project_features_box">
                <p className="project_features timeline-text">
                  ✯ Users can edit and delete existing notes.
                </p>
              </div>
              <div className="project-link-btns">
                <a target="_blank" href="https://googlekeepapp.netlify.app/">
                  <button className="form-btn">
                    {" "}
                    <ion-icon name="eye-outline" /> Live Preview
                  </button>
                </a>
                <a target="_blank" href="https://github.com/gauravsoni97">
                  <button className="form-btn">
                    {" "}
                    <ion-icon name="code-slash-outline" /> Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project_box  service-item ">
            <div className="project_img project_img2" style={{backgroundImage:`url(${moneymanagement})`}}></div>
            <div className="project-desc">
              <h2>Money Management</h2>
              <p className="timeline-text">
                The Money Management tool is a web-based application that helps
                users manage their finances based on the 50-30-20 rule of
                budgeting.
              </p>
              <br />
              <h4>Features</h4>
              <div className="project_features_box">
                <p className="project_features timeline-text">
                  {" "}
                  ✯ Users can edit and delete existing notes.
                </p>
              </div>
              <div className="project_features_box">
                <p className="project_features timeline-text">
                  {" "}
                  ✯ Data storage to keep track of user's financial history and
                  progress over time
                </p>
              </div>
              <div className="project-link-btns">
                <a target="_blank" href="https://moneymanagement.netlify.app/">
                  <button className="form-btn">
                    {" "}
                    <ion-icon name="eye-outline" /> Live Preview
                  </button>
                </a>
                <a target="_blank" href="https://github.com/gauravsoni97">
                  <button className="form-btn">
                    {" "}
                    <ion-icon name="code-slash-outline" /> Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="project_box  service-item ">
            <div className="project_img project_img3" style={{backgroundImage:`url(${macosui2})`}}></div>
            <div className="project-desc">
              <h2>macOS UI Clone</h2>
              <p className="timeline-text">
                Designed and developed the exact user interface of the macOS
                operating system using ReactJs in which, I have covered Login
                Page, Docks, New folder, Open Window, Spotlight, Battery Status,
                Wifi Connection, App menu, Status Menu, Control Center, Apple
                Menu, Restart Window, Launchpad and a lot more.
              </p>
              <br />
              <div className="project-link-btns">
                <a target="_blank" href="https://macosui.netlify.app/">
                  <button className="form-btn">
                    {" "}
                    <ion-icon name="eye-outline" /> Live Preview
                  </button>
                </a>
                <a target="_blank" href="https://github.com/gauravsoni97">
                  <button className="form-btn">
                    {" "}
                    <ion-icon name="code-slash-outline" /> Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Portfolio;
