import React from "react";
import "./Home.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
function Home() {
  return (
    <>
      <section id="hero" class="d-flex align-items-center ">
        <div className="home-container">
          <div
            class="container d-flex flex-column align-items-center "
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Zoom top cascade>
              <h1 className="home-h1">GUNASEELAN</h1>
            </Zoom>
            <Zoom top cascade>
              <h3 className="home-h3">Full Stack Developer</h3>
            </Zoom>

            <div class="header-social-links mt-4">
              <a
                href="https://github.com/gunasgs"
                target="_blank"
                class="github"
                rel="noreferrer"
              >
                <i class="bi bi-github me-2"></i>
              </a>
              <a
                href="mailto:gunasgs357@gmail.com"
                target="_blank"
                rel="noreferrer"
                class="gmail"
              >
                <i class="bi bi-envelope-fill me-2"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/guna-seelan-6b9636212/"
                target="_blank"
                class="linkedin"
                rel="noreferrer"
              >
                <i class="bi bi-linkedin me-2"></i>
              </a>
            </div>

            <a href="#about" class="btn-about ">
              <Zoom top cascade>
                Get Started
              </Zoom>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
