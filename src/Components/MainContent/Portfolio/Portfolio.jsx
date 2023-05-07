import React from "react";
import "../../../index.css";
import ProjectList from "../../../DataMap/Projects";

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        {/*------------ all projects here to show --------------*/}
        <div className="all-projects">
          {(ProjectList || []).map((ele) => {
            const { id, image, tag, title, description, liveLink, githubLink } =
              ele;
            return (
              <>
                <div className="project_box  service-item " key={id}>
                  <div
                    className="project_img1 project_img"
                    style={{ backgroundImage: `URL(${image})` }}
                  >
        

                  </div>
                  <div className="project-desc">
                    <h2>{title}</h2>
                    <p className="timeline-text">{description}</p>
                    <br />
                    <div className="project-link-btns">
                      <a target="_blank" href={liveLink}>
                        <button className="form-btn">
                          <ion-icon name="eye-outline" /> Live Preview
                        </button>
                      </a>
                      <a target="_blank" href={githubLink}>
                        <button className="form-btn">
                          <ion-icon name="code-slash-outline" /> Source Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Portfolio;
