import React from "react";
import "../../../index.css";

import Skills from "./Skills";

const About = () => {

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Hello! My name is Gaurav Soni and I am a frontend web developer from
          Rajasthan, India. I have more than 3+ years of experience working with
          HTML, CSS, JavaScript, Bootstrap, ReactJs and other fronend
          development technologies. Currently, I am expanding my skills by
          learning NextJs.
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

   

      <Skills/>
    
     
    </article>
  );
};

export default About;
