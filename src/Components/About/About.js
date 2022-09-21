import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <>
      <Fade bottom>
        <main id="main ">
          <section id="about" class="about">
            <div class="container  mt-5 pt-3" data-aos="fade-up">
              <div class="section-title mt-lg-3 pt-lg-3 mb-5 ">
                <h2>About</h2>
              </div>

              <div class="row mt-5  ">
                <div class="col-lg-7 me-5 ">
                  <h2 className="d-flex justify-content-start">
                    Full Stack Developer
                  </h2>
                  <p class=" mt-4 about-desc mb-4">
                    Hi I'm Gunaseelan.S, as a MERN Developer. A highly result
                    oriented Engineering graduate with strong understanding of
                    client and server communication.Passion towards developing
                    web applications seeking for opportunity in an organization
                    to learn and grow with knowledge
                  </p>
                  <div class="row ">
                    <div class="col-lg-12 d-flex justify-content-center mt-4 ">
                      <a
                        href="https://drive.google.com/file/d/11o1gwl25-H6hA3JnYJRW1YS__pLTkCTJ/view?usp=sharing"
                        target="_blank "
                      >
                        <button class="btn-resume">View Resume</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 ">
                  <img
                    src="img/bg.jpg"
                    class="img-fluid  about-img img-thumbnail"
                    alt="pic"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Fade>
    </>
  );
}

export default About;
