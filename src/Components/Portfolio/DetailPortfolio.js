import React from "react";
import "./Portfolio.css";
import { fullData } from "./PortfolioData";

export default function DetailPortfolio(props) {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {fullData.map((element) => {
          return (
            <article key={element.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={element.img} alt="Project" />
              </div>
              <h3>{element.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={element.github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={element.live}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        <div></div>
      </div>
      <div
        style={{ marginBottom: "2rem" }}
        className="container portfolio-button"
      >
        <button
          style={{ width: "10rem", margin: "0 auto" }}
          onClick={props.onClick}
          className="detail-btn portfolio-btn btn btn-primary"
        >
          Back
        </button>
      </div>
    </section>
  );
}
