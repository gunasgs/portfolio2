import React from "react";
import "./Skills.css";
import LightSpeed from "react-reveal/LightSpeed";
function Skill() {
  return (
    <section id="skills" className="skills">
      <div className="container mt-4  mb-5 " data-aos="fade-up">
        <div className="section-title  mt-lg-5 pt-lg-4 mb-lg-5 ">
          <h2>Skills</h2>
        </div>

        <LightSpeed bottom>
          <div className="skills-container mb-3 pb-1 ">
            <div className="skills-item ">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-html5-plain colored"></i>
                </div>
                <label className="skill-name">HTML</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-css3-plain colored"></i>
                </div>
                <label className="skill-name">CSS</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-bootstrap-plain colored"></i>
                </div>
                <label className="skill-name">Bootstrap</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-materialui-plain colored"></i>
                </div>
                <label className="skill-name">Material UI</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-javascript-plain colored"></i>
                </div>
                <label className="skill-name">Javascript</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-react-original colored"></i>
                </div>
                <label className="skill-name">ReactJS</label>
              </div>

              <div className="skill-card ">
                <div className="skill-icon">
                  <i className="devicon-mysql-plain-wordmark colored"></i>
                </div>
                <label className="skill-name">MySQL</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-mongodb-plain colored"></i>
                </div>
                <label className="skill-name">MongoDB</label>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="devicon-express-original-wordmark colored"></i>
                </div>
                <label className="skill-name">Express</label>
              </div>
              <div className="skill-card ">
                <div className="skill-icon">
                  <i className="devicon-nodejs-plain-wordmark colored"></i>
                </div>
                <label className="skill-name">NodeJS</label>
              </div>

              <div className="skill-card ">
                <div className="skill-icon">
                  <i className="devicon-git-plain colored"></i>
                </div>
                <label className="skill-name">Git</label>
              </div>
              <div className="skill-card ">
                <div className="skill-icon">
                  <i className="devicon-heroku-plain colored"></i>
                </div>
                <label className="skill-name">Heroku</label>
              </div>
            </div>
          </div>
        </LightSpeed>
      </div>
    </section>
  );
}

export default Skill;
