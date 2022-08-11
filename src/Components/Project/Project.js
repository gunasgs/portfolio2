import React from "react";

function Project() {
  let project = [
    {
      title: "Hotel Management",
      poster: "https://i.im.ge/2022/08/07/FRUz36.hotel-booking.jpg",
      poster2:
        "https://s3.envato.com/files/309359792/Image%20Preview%20Set%20Figma/04_GuestDetailPage.jpg",
      icon: "devicon-materialui-plain",
      frontend: "https://github.com/gunasgs/Project-Hotel-Management-Frontend",
      backend: "https://github.com/gunasgs/Project-Hotel-Management-Backend",
      live: "https://project-hotel-management.netlify.app",
      des: "Developed MERN Stack Application Where User Can Register And Login. Admin Can Control Room Details Are In CRUD Function.The Booking Status Can Be Check In And Check Out.Booking Details Are Also Un CRUD Function.",
    },
    {
      title: "Netflix-clone",
      poster: "https://i.im.ge/2022/08/02/FA52Qx.netflix.jpg",
      poster2:
        " https://www.justinlowen.dev/img/portfolio-01-netflix-clone.png",
      live: "https://stirring-pastelito-40ba45.netlify.app",
      icon: "devicon-bootstrap-plain-wordmark ",

      frontend: "https://github.com/gunasgs/netflix-clone",
      backend: "https://github.com/gunasgs/Netflix-Backend",
      des: "Developed MERN Stack Application For  Movie Details With CRUD Function ,Where User Can Register And Login .Which Include Play Option In Netlify Movies",
    },
  ];
  return (
    <>
      <section id="project" class="skills">
        <div class="container" data-aos="fade-up">
          <div class="section-title  pt-4 mb-5  ">
            <h2 className="mt-5">Project</h2>
          </div>

          <div class="row ">
            {project.map((e) => {
              return (
                <div class="col-lg-4  col-md-6 col-sm-12 mx-auto project card">
                  <div className="project-img imgBox">
                    <img className="project-img" src={e.poster} alt="hotel" />
                    <img className="project-img " src={e.poster2} alt="hotel" />
                  </div>
                  <div className="project-desc details">
                    <div className="content">
                      <h4 class="card-title text-center  mt-3">{e.title}</h4>
                      <p class="des">{e.des}</p>
                      <div class="project-icon">
                        <div>
                          <i class="devicon-react-original-wordmark colored iconn"></i>
                        </div>
                        <div>
                          <i class={` ${e.icon} colored iconn`}></i>
                        </div>
                        <div>
                          <i class="devicon-mongodb-plain-wordmark colored iconn"></i>
                        </div>
                        <div>
                          <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="node"
                            class="img-icon colored iconn"
                          />
                        </div>
                        <div>
                          <i class="devicon-express-original-wordmark colored iconn"></i>
                        </div>
                      </div>
                      <div className="btn-group  ">
                        <a
                          href={e.frontend}
                          rel="noreferrer"
                          target="_blank"
                          class="btn btn-sm"
                        >
                          <i class="bi bi-github"></i> Front-End
                        </a>
                        <a
                          href={e.backend}
                          rel="noreferrer"
                          target="_blank"
                          class="btn btn-sm"
                        >
                          <i class="bi bi-github"></i> Back-End
                        </a>
                        <a
                          href={e.live}
                          target="_blank"
                          rel="noreferrer"
                          class="btn btn-sm "
                        >
                          <i class="bi bi-link-45deg me-2"></i>Live
                        </a>
                      </div>
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
