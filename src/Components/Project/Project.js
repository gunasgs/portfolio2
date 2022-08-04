import React from "react";

function Project() {
  let project = [
    {
      title: "Hotel Management",
      poster: "https://i.im.ge/2022/08/02/FA3QN9.hotel-booking.jpg",

      frontend: "https://github.com/gunasgs/Project-Hotel-Management-Frontend",
      backend: "https://github.com/gunasgs/Project-Hotel-Management-Backend",
      live: "https://project-hotel-management.netlify.app",
    },
    {
      title: "Netflix-clone",
      poster: "https://i.im.ge/2022/08/02/FA52Qx.netflix.jpg",
      live: "https://stirring-pastelito-40ba45.netlify.app",
      frontend: "https://github.com/gunasgs/netflix-clone",
      backend: "https://github.com/gunasgs/Netflix-Backend",
    },
  ];
  return (
    <>
      <section id="project" class="skills">
        <div class="container" data-aos="fade-up">
          <div class="section-title  pt-4 pb-5 mb-5  ">
            <h2 className="mt-5">Project</h2>
          </div>

          <div class="row ">
            {project.map((e) => {
              return (
                <div
                  class="col-lg-4  col-md-6 col-sm-12 mx-auto project"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div class="card icon-box" style={{ width: "18rem" }}>
                    <a href={e.link} target="_blank" rel="noreferrer">
                      <img class="card-img-top" src={e.poster} alt="hotel" />{" "}
                    </a>

                    <h5 class="card-title text-center mt-3">{e.title}</h5>
                    <div className="btn-group  ">
                      <a
                        href={e.frontend}
                        rel="noreferrer"
                        target="_blank"
                        class="btn btn-outline-light btn-sm text-dark "
                      >
                        <i class="bi bi-github"></i> Front-End
                      </a>
                      <a
                        href={e.backend}
                        rel="noreferrer"
                        target="_blank"
                        class="btn btn-outline-light btn-sm text-dark"
                      >
                        <i class="bi bi-github"></i> Back-End
                      </a>
                      <a
                        href={e.live}
                        target="_blank"
                        rel="noreferrer"
                        class="btn btn-outline-light btn-sm text-dark"
                      >
                        <i class="bi bi-link-45deg me-2"></i>Live
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
