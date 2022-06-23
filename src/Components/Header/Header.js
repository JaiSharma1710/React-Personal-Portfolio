import React from "react";
import CTA from "./CTA";
import ME from "../../Assets/me/First-removebg.png";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jai Sharma</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
