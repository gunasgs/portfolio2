import React from "react";
import "./Project.css";
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
      des: "Developed MERN Stack Application where user can Register and Login.Admin can control room details are in CRUD function.The booking status can be Check In and Check Out.Booking details are also un CRUD function.",
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
      des: "Developed MERN Stack Application for  movie details with CRUD function where user can Register and Login which include play option in Netlify movies",
    },
  ];
  return (
    <>
      <section id="project" className="projects">
        <div className="container mt-4 " data-aos="fade-up">
          <div className="section-title  mt-5 mb-5  ">
            <h2>Project</h2>
          </div>

          <div className="row ">
            {project.map((e, i) => {
              return (
                <div
                  className=" col-lg-6   col-md-12 col-sm-12 card-container   "
                  key={i}
                >
                  <div className="card-1">
                    <div className="project-img imgBox">
                      <img
                        className="project-img "
                        src={e.poster}
                        alt="hotel"
                      />
                      <img
                        className="project-img  "
                        src={e.poster2}
                        alt="hotel"
                      />
                    </div>

                    <div className="project-desc details">
                      <div className="content">
                        <h4 className="card-title text-center  mt-3">
                          {e.title}
                        </h4>
                        <p className="des">{e.des}</p>
                        <div className="project-icon">
                          <div>
                            <i className="devicon-react-original-wordmark colored iconn"></i>
                          </div>
                          <div>
                            <i className={` ${e.icon} colored iconn`}></i>
                          </div>
                          <div>
                            <i className="devicon-mongodb-plain-wordmark colored iconn"></i>
                          </div>
                          <div>
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                              alt="node"
                              className="img-icon colored iconn"
                            />
                          </div>
                          <div>
                            <i className="devicon-express-original-wordmark colored iconn"></i>
                          </div>
                        </div>
                        <div className="btn-group  ">
                          <a
                            href={e.frontend}
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-sm"
                          >
                            <i className="bi bi-github"></i> Front-End
                          </a>
                          <a
                            href={e.backend}
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-sm"
                          >
                            <i className="bi bi-github"></i> Back-End
                          </a>
                          <a
                            href={e.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm "
                          >
                            <i className="bi bi-link-45deg me-2"></i>Live
                          </a>
                        </div>
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
