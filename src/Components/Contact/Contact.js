import emailjs from "@emailjs/browser";
import { useState } from "react";
import React, { useRef } from "react";
import "./Contact.css";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
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
      <Zoom top>
        <main id="main">
          <div id="contact" class="contact mt-5">
            <div class="container mt-5 mb-4 " data-aos="fade-up">
              <div class="section-title mt-2 mb-4">
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
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="row mt-5">
                <div class="col-lg-4">
                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt"></i>

                      <h4>Location</h4>

                      <p>Dharmapuri</p>
                    </div>

                    <div class="email">
                      <i class="bi bi-envelope"></i>
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

                    <div class="phone">
                      <i class="bi bi-phone"></i>
                      <h4>Call</h4>
                      <p>+91 8428277727</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8 mt-5 mt-lg-0">
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group mt-3">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div class="text-center ">
                      <button type="submit" class="btn-about mt-3">
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
      </Zoom>
    </>
  );
}

export default Contact;
