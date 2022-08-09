import React from "react";

function Skill() {
  return (
    <section id="skills" class="skills">
      <div class="container mt-5  pt-2 mb-5 pb-5 " data-aos="fade-up">
        <div class="section-title  mt-lg-5 pt-lg-5 ">
          <h2>Skills</h2>
        </div>

        <div class="row skills-content mt-5 ">
          <div class="col-lg-6">
            <div class="progress">
              <span class="skill">
                HTML <i class="val">80%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                CSS<i class="val">80%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                JAVASCRIPT <i class="val">75%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">
                REACT <i class="val">75%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="progress">
              <span class="skill">
                NODE <i class="val">75%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar  progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                {" "}
                EXPRESS<i class="val">75%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar  progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">
                MYSQL <i class="val">65%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar  progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">
                MONGODB <i class="val">75%</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar  progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
