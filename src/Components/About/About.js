import React from "react";

function About() {
  return (
    <>
      <main id="main about">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="section-title mt-5  pt-4 ">
              <h2>About</h2>
            </div>

            <div class="row mt-5 mb-5">
              <div class="col-lg-4 mt-5">
                <img
                  src="img/bg.jpg"
                  class="img-fluid mt-5 about-img img-thumbnail"
                  alt="pic"
                />
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content ">
                <h2 className="mx-lg-4">Full Stack Developer</h2>
                <p class="fst-italic mt-4 mx-lg-5 mx-sm-0 mx-md-0">
                  Hi ! I'm Gunaseelan.S, as a MERN Developer. I develop web
                  applications. My core skill is based on JavaScript and I love
                  to do most of the things using JavaScript. I love to make the
                  web more open to the world. I am available for any kind of job
                  opportunity that suits my interests.
                </p>
                <div class="row">
                  <div class="col-lg-6 mx-lg-5 mx-sm-0 mx-md-0">
                    <ul>
                      <li>
                        <i class="bi bi-rounded-right"></i>{" "}
                        <strong>Email:</strong> gunasgs357@gmail.com
                      </li>
                      <li>
                        <i class="bi bi-rounded-right"></i>{" "}
                        <strong>Phone:</strong> 8428277727
                      </li>
                    </ul>

                    <button class="btn-resume">
                      <a
                        href="https://drive.google.com/file/d/18jiP3utcvoURBpSgDtUwQN0Ex8Qf_gLz/view?usp=sharing"
                        target="_blank "
                      >
                        View Resume
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" class="skills">
          <div class="container" data-aos="fade-up">
            <div class="section-title pt-4 pb-4 mt-5 ">
              <h2>Skills</h2>
            </div>

            <div class="row skills-content">
              <div class="col-lg-6">
                <div class="progress">
                  <span class="skill">
                    HTML & CSS <i class="val">80%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
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
                    {" "}
                    BOOTSTRAP<i class="val">70%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    JAVASCRIPT <i class="val">65%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
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
                    REACT JS <i class="val">60%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="progress">
                  <span class="skill">
                    {" "}
                    NODE JS<i class="val">80%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
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
                    {" "}
                    EXPRESS<i class="val">70%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    MYSQL <i class="val">50%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div class="progress">
                  <span class="skill">
                    MONGODB <i class="val">50%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="section-title mt-4 pt-4">
              <h2>Certificate</h2>
            </div>

            <div class="row mt-5">
              <div class="col-lg-5 pt-4 mt-5 pt-lg-0 content ">
                <h3 class="mt-5">Github</h3>
                <p class="fst-italic mt-4 mx-4 certificate">
                  For Successfully Completing Github Certification
                  <br />
                  This Certificate Awarded By
                  <br /> Each One Teach One
                </p>
              </div>
              <div class="col-lg-7">
                <img
                  src="img/github.jpg"
                  class="img-fluid certificate"
                  alt="certificate"
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* 
        <section id="testimonials" class="testimonials">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Testimonials</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div
              class="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="../../../public/img/bg.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}

export default About;
