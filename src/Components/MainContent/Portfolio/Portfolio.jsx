import React from "react";
import "../../../index.css";
import ProjectList from "../../../DataMap/Projects";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        {/*------------ all projects here to show --------------*/}
        <div className="all-projects">
          {ProjectList?.sort((a, b) => b.id - a.id).map((ele) => {
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
                          <OpenInNewRoundedIcon style={{width:"1.1rem"}}/> Live Preview
                        </button>
                      </a>
                      <a target="_blank" href={githubLink}>
                        <button className="form-btn">
                        <CodeRoundedIcon style={{width:"1.1rem"}}/> Source Code
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
