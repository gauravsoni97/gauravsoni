import React from 'react'
import "../../../index.css";


const Resume = () => {
  return (
    
    <article class="resume" data-page="resume">

    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>



    <section class="timeline">

      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">Connectlab - React js Developer</h4>

          <span>Oct 2021 — Present</span>

          <ul>
            <li class="timeline-text">
              Developed and maintained websites using HTML, CSS, ReactJs,
              and other front-end development technologies
            </li>
            <li class="timeline-text">
              Collaborated with designers and implemented responsive
              designs and pixel-perfect layouts of websites
            </li>
            <li class="timeline-text">
              Developed and maintained reusable components using ReactJS.
            </li>
            <li class="timeline-text">
              Optimized web pages for performance and ensured crossbrowser compatibility and ensured that they load
              quickly
            </li>
            <li class="timeline-text">
              Utilized Git for version control and collaborated with other
              developers on code reviews
            </li>
          </ul>



        </li>

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">Collaberus Technologies - Frontend Web Developer</h4>

          <span>Feb 2021 — May 2021</span>

          <ul>
            <li class="timeline-text">
              Developed and maintained websites using HTML, CSS, JavaScript,
              and other front-end development technologies
            </li>
            <li class="timeline-text">
              Ensured that the web pages and applications are fully responsive and optimized for different devices
              and browsers
            </li>
            <li class="timeline-text">
              Developed and maintained reusable components using ReactJS.
            </li>
            <li class="timeline-text">
              Collaborated with designers and back-end developers to
              implement new features and functionalities
            </li>
          </ul>
        </li>
      </ol>

    </section>


    <section class="timeline">

      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">JCD Memorial College, Sirsa</h4>

          <span>2017 — 2020</span>

          <p class="timeline-text">
            I acquired a 70% grade in my bachelor's degree in science from JCD Memorial College.
          </p>

        </li>

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">CH. Harpal Singh Convet SR. Sec School, Ellenabad</h4>

          <span>Upto 2017</span>

          <p class="timeline-text">
            I was a bright student in school and typically received 80% or higher in every class.
          </p>

        </li>

      </ol>

    </section>

  </article>
  )
}

export default Resume