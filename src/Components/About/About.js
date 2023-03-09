import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <>
      <Fade bottom>
        <main id="main ">
          <section id="about" className="about mb-4 pb-3">
            <div className="container  mt-5 pt-4" data-aos="fade-up">
              <div className="section-title mt-lg-3 pt-lg-3 mb-5 ">
                <h2>About</h2>
              </div>

              <div className="row mt-3  ">
                <div className="col-lg-7 me-5 ">
                  <ul className="about-ul">
                    <li>
                      A highly result oriented Engineering graduate with strong
                      understanding of client and server communication
                    </li>

                    <li>
                      My field of Interest are building new Web Technologies,
                      Products and also in areas related to Deep Learning and
                      Natural Launguage Processing.
                    </li>
                    <li>
                      Whenever possible, I also apply my passion for developing
                      products with NodeJS and Modern Javascript Library and
                      Frameworks like ReactJS
                    </li>
                  </ul>

                  <div className="row ">
                    <div className="col-lg-12 d-flex justify-content-center mt-4 ">
                      <a
                        href="https://drive.google.com/file/d/14xPpnW57oL6FLmm2wBbNkQWGtX9ylbp3/view?usp=share_link"
                        target="_blank "
                      >
                        <button className="btn-resume">View Resume</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <img
                    src="img/bg.jpg"
                    className="img-fluid  about-img img-thumbnail"
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
