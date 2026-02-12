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
                <h2>About Me</h2>
              </div>

              <div className="row mt-3  ">
                <div className="col-lg-7 me-5 ">
                  <ul className="about-ul">
                    <li>
                 I’m a Frontend Developer with 3+ years of experience building scalable and high-performance web applications using React.js and Next.js. I specialize in modern frontend architecture, reusable component systems, and efficient state management. Over the years, I’ve worked on complex dashboards, multi-tenant platforms, and admin systems, focusing on clean code, performance optimization, and seamless RESTful API integration.
                    </li>
                    <li>
            I enjoy transforming Figma designs into responsive and accessible user interfaces while ensuring smooth user experiences across devices. I thrive in Agile environments, collaborating closely with designers and backend teams to deliver maintainable, user-centric solutions. I’m passionate about building reliable products that not only look good but also perform efficiently at scale.
                    </li>
                 
                  </ul>

                  <div className="row ">
                    <div className="col-lg-12 d-flex justify-content-center mt-4 ">
                      <a
                        href="https://drive.google.com/file/d/1nA4Jljg8qC_6BzUGHnet14NOFG1Kz2S_/view?usp=drive_link"
                        target="_blank "
                      >
                        <button className="btn-resume">View Resume</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <img
                    src="img/profile.png"
                    className="img-fluid mt-5  about-img img-thumbnail"
                    alt="profile picture"
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
