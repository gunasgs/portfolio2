import emailjs from "@emailjs/browser";
import { useState } from "react";
import React, { useRef } from "react";
import "./Contact.css";
const Result = () => {
  return (
    <p className="text-success font-weight-bold">
      Your message has been sent successfully.
    </p>
  );
};
function Contact() {
  const form = useRef();

  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mu5a15",
        "template_ofxasbw",
        form.current,
        "sMszufQktj3aKfY_i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);
  return (
    <>
      <main id="main">
        <div id="contact" className="contact mt-5">
          <div className="container mt-5 mb-4 " data-aos="fade-up">
            <div className="section-title mt-2 mb-4">
              <h2>Contact</h2>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31206.264032505303!2d78.13397448795166!3d12.126994408624059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16f95a63ed01%3A0x3f2cb64e61c93aef!2sDharmapuri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655545742121!5m2!1sen!2sin"
                style={{
                  border: "0",
                  width: "100%",
                  height: "330px",
                }}
                title="contact"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>

                    <h4>Location</h4>

                    <p>Dharmapuri</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email</h4>
                    <p>
                      <a
                        href="mailto:gunasgs357@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        gunasgs357@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call</h4>
                    <p>
                      <a
                        href="https://wa.me/+918428277727"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        8428277727
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center ">
                    <button type="submit" className="btn-about mt-3">
                      Send Message
                    </button>
                  </div>
                  <div className="result d-flex align-items-center justify-content-center">
                    {result ? <Result /> : ""}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
