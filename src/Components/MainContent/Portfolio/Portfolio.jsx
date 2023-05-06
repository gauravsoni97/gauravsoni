import React from "react";
import "../../../index.css";
import "./portfolio.css"
import ProjectList from "../../../DataMap/Projects";

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <div className="project_filter">
        <span className="filter_tags">All</span>
        <span className="filter_tags">HTML</span>
        <span className="filter_tags">Bootstrap</span>
        <span className="filter_tags">React Js</span>
        <span className="filter_tags">Tailwind CSS</span>
      </div>

      <div className="projects">
        {ProjectList.map((ele) => {
          const { id, image, tag, title, description, liveLink, githubLink } =
            ele;
          return (
            <div className="projectCard" key={id}>
              <div className="projectimg">
                <img src={image} alt="" />
              </div>
              <div className="project_tags">
                <span className="project_tag">{tag}</span>
              </div>
              <h3 className="project_title">{title}</h3>
              <p className="project_desc">{description}</p>
              <div className="project_Links">
                <button className="project_link_button">
                  <a href={liveLink} className="github">
                    Live Preview
                  </a>
                </button>
                <button className="project_link_button">
                  <a href={githubLink} className="github">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Portfolio;
