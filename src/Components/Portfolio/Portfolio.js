import React from "react";
import "./Portfolio.css";
import { data } from "./PortfolioData";

export default function Portfolio(props) {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((element) => {
          return (
            <article key={element.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={element.img} alt="Project" />
              </div>
              <h3>{element.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  rel="noreferrer"
                  href={element.github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  rel="noreferrer"
                  href={element.live}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="container portfolio-button">
        <button
          onClick={props.onClick}
          className="portfolio-btn btn btn-primary"
        >
          See More
        </button>
      </div>
    </section>
  );
}
