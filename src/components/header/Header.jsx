import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="lhs">
          <h5>Hi Guys, I'm</h5>
          <h1>Chris Hunter</h1>
          <h5 className=".text-light">Full Stack Software Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="rhs">
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
