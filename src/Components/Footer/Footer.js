import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Jai Sharma
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100016138087731">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/jaisharma1710/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jaisharma1710/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/JaiSharma1710">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {date}, Jai Sharma</small>
      </div>
    </footer>
  );
}
