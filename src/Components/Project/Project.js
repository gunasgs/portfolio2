import React from "react";

function Project() {
  let project = [
    {
      title: "Hotel Management",
      poster: "https://i.im.ge/2022/08/02/FA3QN9.hotel-booking.jpg",
      link: "https://project-hotel-management.netlify.app",
    },
    {
      title: "Netflix-clone",
      poster: "https://i.im.ge/2022/08/02/FA52Qx.netflix.jpg",
      link: "https://stirring-pastelito-40ba45.netlify.app",
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
                    <a href={e.link} target="_blank">
                      <img class="card-img-top" src={e.poster} alt="hotel" />{" "}
                    </a>

                    <h5 class="card-title text-center mt-3">{e.title}</h5>
                  </div>
                  <div className="project-desc">
                    <h5>Live</h5>
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
