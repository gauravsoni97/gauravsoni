import React from "react";
import "../../../index.css";

const About = () => {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Hello! My name is Gaurav Soni and I am a frontend web developer from
          Rajasthan, India. I have more than 2 years of experience working with
          HTML, CSS, JavaScript, Bootstrap,React.js and other fronend
          development technologies. Currently, I am expanding my skills by
          learning Next.js.
        </p>
        <p>
          I am passionate about web development and enjoy collaborating with
          others as part of a team. I believe that teamwork is essential to
          producing great results and I am always eager to learn from my
          colleagues.
        </p>
        <p>
          When I am not coding, I enjoy exploring new technologies and staying
          up-to-date with the latest trends in web development. I am always
          looking for new challenges and opportunities to grow as a developer.
        </p>
      </section>
      {/*
  - service
*/}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <span className="service-icon-box">
              <ion-icon name="color-wand-outline" />
            </span>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Responsive Website Design
              </h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <ion-icon name="code-slash-outline" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Frontend Web development
              </h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <ion-icon name="desktop-outline" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Cross-browser compatibility testing
              </h4>
              <p className="service-item-text">
                Test the website on different web browsers to ensure that it
                functions properly and looks consistent.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <ion-icon name="id-card-outline" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Maintenance and support</h4>
              <p className="service-item-text">
                Provide ongoing maintenance and support to ensure that the
                website or application remains up-to-date and continues to
                function properly.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay />
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline" />
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Gautam Soni"
                width={80}
                data-modal-img
              />
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Gautam Soni
            </h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/*
  - clients
*/}
      {/* <section className="clients">

  <h3 className="h3 clients-title">Clients</h3>

  <ul className="clients-list has-scrollbar">

    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-1-color.png" alt="client logo">
      </a>
    </li>

    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-2-color.png" alt="client logo">
      </a>
    </li>

    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-3-color.png" alt="client logo">
      </a>
    </li>

    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-4-color.png" alt="client logo">
      </a>
    </li>

    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-5-color.png" alt="client logo">
      </a>
    </li>

    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-6-color.png" alt="client logo">
      </a>
    </li>

  </ul>

</section>  */}
      <section className="skill">
        <h3 className="h3 skills-title">Tech Stacks I Use</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Html.png"
                alt="HTML"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">HTML</h4>
              <p className="skills-item-text">Mark-Up</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Css.png"
                alt="CSS"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">CSS</h4>
              <p className="skills-item-text">Style Sheet</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Javascript.png"
                alt="JavaScript"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">JavaScript</h4>
              <p className="skills-item-text">Programming</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Bootstrap.png"
                alt="Bootstrap"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">Bootstrap</h4>
              <p className="skills-item-text">CSS Framework</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/React.png"
                alt="React"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">React Js</h4>
              <p className="skills-item-text">Js Library</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Figma.png"
                alt="Figma"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">Figma</h4>
              <p className="skills-item-text">Designing Tool</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Tailwind.jpeg"
                alt="Tailwind"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">Tailwind CSS</h4>
              <p className="skills-item-text">CSS Framework</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Sass.png"
                alt="Sass"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">Sass</h4>
              <p className="skills-item-text">CSS Preprocessor</p>
            </div>
          </li>
          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src="./assets/images/skills/Wordpress.png"
                alt="Wordpress"
                width={50}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skiills-item-title">Wordpress</h4>
              <p className="skills-item-text">CMS</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
