import React from "react";
import CV from "../../Assets/Frontend Developer__Jai Sharma__Resume.pdf";
import "./Header.css";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Lets Talk
      </a>
    </div>
  );
}
