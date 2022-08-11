import React from "react";

function About() {
  return (
    <>
      <main id="main ">
        <section id="about" class="about">
          <div class="container mb-5 pb-3 mt-5" data-aos="fade-up">
            <div class="section-title mt-lg-3 pt-lg-3  ">
              <h2>About</h2>
            </div>

            <div class="row mt-5  ">
              <div class="col-lg-7 me-5 ">
                <h2 className="d-flex justify-content-start">
                  Full Stack Developer
                </h2>
                <p class=" mt-4 about-desc mb-4">
                  Hi ! I'm Gunaseelan.S, as a MERN Developer. I develop web
                  applications. My core skill is based on JavaScript and I love
                  to do most of the things using JavaScript. I love to make the
                  web more open to the world. I am available for any kind of job
                  opportunity that suits my interests.
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
    </>
  );
}

export default About;
