import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

export default function Nav() {
  let [active, setActive] = useState("#home");

  return (
    <nav>
      <a
        onClick={() => {
          setActive("#home");
        }}
        href="#home"
        className={active === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => {
          setActive("#experience");
        }}
        className={active === "#experience" ? "active" : ""}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => {
          setActive("#portfolio");
        }}
        className={active === "#portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <MdWorkOutline />
      </a>
      <a
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
