import React from "react";
import "./About.css";
import ME from "../../Assets/me/Second.png";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p>
            I'm Jai Sharma a Web developer with experience in various web
            technologies like React js, Express, Node js, JavaScript, HTML, CSS,
            MongoDB etc. I'm a BTech graduate from Galgotias college of
            engineering and technology. I started web development in my 3rd year
            of BTech with basic HTML, CSS and JavaScript and gradually moved
            towards creating different frontend and backend applications using
            React js, Node js and express. Right now I'm hands on with frontend
            development with React js and other frontend technologies and
            looking forward to work as a frontend developer or react js
            developer in any Organization where I can get a chance to work on
            big and complex projects and enhance my skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
