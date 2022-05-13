import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h3>Who I am and where I'm from...</h3>
              <div className="overlay">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  magnam dolorem quaerat quis iste ratione aliquam deleniti
                  perferendis dolor est, quas sequi quasi rem, in dolores
                  nostrum cupiditate nam natus.
                </h5>
              </div>
            </article>
            <article className="about__card">
              <h3>My Hobbies & Interests...</h3>
              <div className="overlay">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  magnam dolorem quaerat quis iste ratione aliquam deleniti
                  perferendis dolor est, quas sequi quasi rem, in dolores
                  nostrum cupiditate nam natus.
                </h5>
              </div>
            </article>
            <article className="about__card">
              <h3>What I'm Looking For...</h3>
              <div className="overlay">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  magnam dolorem quaerat quis iste ratione aliquam deleniti
                  perferendis dolor est, quas sequi quasi rem, in dolores
                  nostrum cupiditate nam natus.
                </h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
