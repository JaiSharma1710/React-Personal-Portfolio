import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Tick from "../../Assets/Projects/ok.gif";

export default function Contact() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();
  const [alert, setAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhr3j9h",
        "template_2a6rqhv",
        form.current,
        "YDP-W_8c0G3-Qomvw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      setAlert(true);
    }, 500);

    setTimeout(() => {
      setAlert(false);
    }, 3500);

    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  const popUp = (
    <div className="form-alert alert alert-success" role="alert">
      <img className="tick-img" src={Tick} alt="Tick" />
      <p>Message Sent</p>
    </div>
  );

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Sharmajai901@gmail.com</h5>
            <a
              href="mailto:sharmajai901@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>JaiSharma1710</h5>
            <a
              href="https://www.instagram.com/jaisharma1710/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Message Me</h5>
            <a
              href="https://api.whatsapp.com/send?phone=09557454006"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          {alert && popUp}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            requried
            ref={name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            ref={email}
            requried
          />
          <textarea
            name="message"
            row="7"
            placeholder="Your Message"
            requried
            ref={message}
          />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
