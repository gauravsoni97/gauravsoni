import React from "react";
import "../../../index.css";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { CompanyData } from "../../../DataMap/CompaniesExp";

const Resume = () => {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Work Experience</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <WorkHistoryRoundedIcon />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ul className="timeline-list">
          {CompanyData.map((ele) => {
            return (
              <>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">{ele.CompanyTitle}</h4>

                  <span> {ele.CompanyTiming}</span>

                  <ul>
                    <li className="timeline-text">{ele.CompanyDesc}</li>
                  </ul>
                </li>
              </>
            );
          })}
        </ul>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <SchoolRoundedIcon />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              JCD Memorial College, Sirsa
            </h4>

            <span>2017 — 2020</span>

            <p className="timeline-text">
              I acquired a 70% grade in my bachelor's degree in science from JCD
              Memorial College.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              CH. Harpal Singh Convet SR. Sec School, Ellenabad
            </h4>

            <span>Upto 2017</span>

            <p className="timeline-text">
              I was a bright student in school and typically received 80% or
              higher in every class.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
