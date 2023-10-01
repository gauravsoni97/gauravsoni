import React from 'react'
import html from "../../../imgs/skills/Html.png"
import css from "../../../imgs/skills/Css.png"
import js from "../../../imgs/skills/Javascript.png"
import bootstrap from "../../../imgs/skills/Bootstrap.png"
import sass from "../../../imgs/skills/Sass.png"
import tailwind from "../../../imgs/skills/Tailwind.jpeg"
import figma from "../../../imgs/skills/Figma.png"
import wordpress from "../../../imgs/skills/Wordpress.png"
import react from "../../../imgs/skills/React.png"

const Skills = () => {
  
  return (
    <section className="skill">
        <h3 className="h3 skills-title">Tech Stacks I Use</h3>
        <ul className="skills-list content-card">

          <li className="skills-item">
            <figure className="skills_avatar">
              <img
                src={html}
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
                src={css}
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
                src={js}
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
                src={bootstrap}
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
               src={react}
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
                src={figma}
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
                src={tailwind}
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
               src={sass}
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
                src={wordpress}
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
  )
}

export default Skills