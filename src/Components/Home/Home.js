import React from "react";
import "./Home.css";
import Zoom from "react-reveal/Zoom";
import About from "../About/About";
import Skill from "../Skills/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Text from "./Text";

function Home() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center ">
        <div className="home-container">
          <div
            className="container d-flex flex-column align-items-center "
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Zoom top cascade>
              <h1 className="home-h1">GUNASEELAN S</h1>
            </Zoom>
            <Zoom top cascade>
              <div className="home-h3">
                <Text />
              </div>
            </Zoom>

            <div className="header-social-links mt-4">
              <a
                href="https://github.com/gunasgs"
                target="_blank"
                className="github"
                rel="noreferrer"
              >
                <i className="bi bi-github me-2 home-ic"></i>
              </a>
              <a
                href="mailto:gunasgs357@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="gmail"
              >
                <i className="bi bi-envelope-fill me-2  home-ic"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/guna-seelan-6b9636212/"
                target="_blank"
                className="linkedin"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin me-2  "></i>
              </a>
            </div>

            <a href="#about" className="btn-about ">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
