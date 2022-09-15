import React from "react";
import "./Skills.css";
function Skill() {
  return (
    <section id="skills" class="skills">
      <div class="container mt-5  mb-5 pt-3" data-aos="fade-up">
        <div class="section-title  mt-lg-5 pt-lg-4 mb-lg-5 ">
          <h2>Skills</h2>
        </div>

        <div class="skills-container mb-3">
          <div class="skills-item">
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-html5-plain colored"></i>
              </div>
              <label class="skill-name">HTML</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-css3-plain colored"></i>
              </div>
              <label class="skill-name">CSS</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-bootstrap-plain colored"></i>
              </div>
              <label class="skill-name">Bootstrap</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-materialui-plain colored"></i>
              </div>
              <label class="skill-name">Material UI</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-javascript-plain colored"></i>
              </div>
              <label class="skill-name">Javascript</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-react-original colored"></i>
              </div>
              <label class="skill-name">ReactJS</label>
            </div>

            <div class="skill-card ">
              <div class="skill-icon">
                <i class="devicon-mysql-plain-wordmark colored"></i>
              </div>
              <label class="skill-name">MySQL</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-mongodb-plain colored"></i>
              </div>
              <label class="skill-name">MongoDB</label>
            </div>
            <div class="skill-card">
              <div class="skill-icon">
                <i class="devicon-express-original-wordmark colored"></i>
              </div>
              <label class="skill-name">Express</label>
            </div>
            <div class="skill-card ">
              <div class="skill-icon">
                <i class="devicon-nodejs-plain-wordmark colored"></i>
              </div>
              <label class="skill-name">NodeJS</label>
            </div>

            <div class="skill-card ">
              <div class="skill-icon">
                <i class="devicon-git-plain colored"></i>
              </div>
              <label class="skill-name">Git</label>
            </div>
            <div class="skill-card ">
              <div class="skill-icon">
                <i class="devicon-heroku-plain colored"></i>
              </div>
              <label class="skill-name">Heroku</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
