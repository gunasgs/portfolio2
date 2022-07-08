import React from "react";

function Home() {
  return (
    <>
      <section id="hero" class="d-flex align-items-center ">
        <div
          class="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className="home-h1">GUNASEELAN</h1>

          {/* <div className="animation">
            <div className="home-wraper">
              <div className="home-item">Full Stack Developer</div>
              <div className="home-item">MERN Stack Developer</div>
            </div>
          </div> */}
          <h3>Full Stack Developer</h3>
          <div class="header-social-links mt-4">
            <a
              href="https://www.linkedin.com/in/guna-seelan-6b9636212/"
              target="blank"
              class="linkedin"
            >
              <i class="bi bi-linkedin me-2"></i>
            </a>
            <a href="https://github.com/gunasgs" target="blank" class="github">
              <i class="bi bi-github me-2"></i>
            </a>
          </div>
          <a href="#about" class="btn-about text-decoration-none">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
