import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <>
      <Fade bottom>
        <main id="main ">
          <section id="about" className="about mb-4 pb-3">
            <div className="container  mt-4 pt-4" data-aos="fade-up">
              <div className="section-title mt-lg-3 pt-lg-3 mb-4 ">
                <h2>About</h2>
              </div>

              <div className="row mt-3  ">
                <div className="col-lg-7 me-5 ">
                  <ul className="about-ul">
                    <li>
                      Hello! I’m Gunaseelan, a passionate Software Developer
                      with a knack for creating innovative solutions that solve
                      real-world problems. I have a strong foundation in
                      ReactJS.
                    </li>
                    <li>
                      I thrive on turning ideas into functional and visually
                      appealing applications. My journey as a Frontend Developer
                      has equipped me with a diverse skill set and a commitment
                      to continuous learning.
                    </li>
                    <li>
                      Explore my work to see how I blend creativity with
                      technology to deliver exceptional results. I am a highly
                      result-oriented Engineering graduate with a strong
                      understanding of client and server communication.
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
                    src="img/guna profile image.png"
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
