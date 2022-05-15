/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8x1o0yl",
      "template_rw0wgqs",
      form.current,
      "iknEs9KBu7ags7Qvx"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* form npm install emailjs-com --save
        then follow guides on emailjs site*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Hi Chris, I'd like to offer you a job... Just kidding! Type whatever you like :)"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <a href="mailto:chriswhunter89@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <a href="https://wa.me/+447493934871" target="_blank">
              Message on Whatsapp
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
