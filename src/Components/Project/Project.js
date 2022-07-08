import React from "react";

function Project() {
  return (
    <>
      <section id="project" class="skills">
        <div class="container" data-aos="fade-up">
          <div class="section-title  pt-4 pb-5 mb-5  ">
            <h2 className="mt-5">Project</h2>
          </div>

          <div class="row ">
            <div
              class="col-lg-4 col-md-6 col-sm-12 mx-auto"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="card icon-box" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://www.foxdomotics.com/blog/wp-content/uploads/2021/09/hotel-room-automation.jpg"
                  alt="hotel"
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Hotel Management</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
