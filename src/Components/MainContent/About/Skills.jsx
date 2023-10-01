import React from "react";
import SkillsData from "../../../DataMap/Skills";

const Skills = () => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">Tech Stacks I Use</h3>
      <ul className="skills-list content-card">
        {SkillsData.map((skill) => (
          <li className="skills-item" key={skill.id}>
            <figure className="skills_avatar">
              <img
                src={skill.SkillImage}
                alt={skill.SkillName}
                width={50}
                style={skill.imgStyle}
                data-testimonials-avatar
              />
            </figure>
            <div className="skills-content-box">
              <h4 className="h4 skills-item-title">{skill.SkillName}</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
