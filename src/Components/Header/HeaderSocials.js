import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Header.css";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://Github.com" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://Instagram.com" rel="noreferrer" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}
