/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
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
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chris-hunter89/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/chriswhunter89">
          <BsGithub />
        </a>
      </div>
      <div className="inspiration">
        <h5>
          This portfolio was inspired by{" "}
          <a
            href="https://www.youtube.com/channel/UCL8l_VxCAN0jOpaLaRAm8sQ"
            target="_blank"
          >
            EGATOR Tutorials.
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
