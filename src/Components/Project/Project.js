import React from "react";
import "./Project.css";
import tist from "../../assets/tist-poster.png";
import payrentz from "../../assets/payrentz-poster.png";
import b2b from "../../assets/b2b-poster.png";
import hotel from "../../assets/hotel-poster.png";
import netflix from "../../assets/netflix.png";

function Project() {
  const projects = [
    {
      title: "TIST Media — Creator Campaign Platform",
      poster: tist,
      live: "https://tistmedia.in/",
      description:
        "Developed the Admin Panel for the live website, managing creator onboarding, campaign tracking, approvals, and analytics with secure API integration, role-based access control, optimized workflows, real-time dashboards, performance monitoring features, and scalable architecture design.",
     
    },
    {
      title: "PayRentz — Rental Platform",
      poster: payrentz,
      live: "https://payrentz.com",
      description:
        "Built a responsive customer website and admin dashboard using React, implementing product and inventory management, customer and lead handling, payment and KYC integrations, invoice generation, and secure backend workflows while optimizing performance and system reliability.",
    
    },
    {
      title: "Techademy — LMS",
      poster: b2b,
      live: "https://techademy.com",
      description:
        "Built a scalable multi-tenant architecture enabling organization-level data management and custom certificate generation for course completion. Developed structured course modules supporting video uploads, external URLs, and YouTube links, while implementing secure role-based access control for efficient and scalable user management.",
   
    },
    // {
    //   title: "Hotel Management System",
    //   poster: hotel,
    //   live: "https://project-hotel-management.netlify.app",
    //   description:
    //     "Developed a full-stack MERN application featuring secure authentication, booking management, and complete CRUD operations. Implemented RESTful APIs, integrated database management with MongoDB, and ensured responsive UI with efficient state handling to deliver a seamless and scalable user experience.",
  
    // },
    {
      title: "Netflix Clone",
      poster: netflix,
      live: "https://cineflixclone.netlify.app",
      description:
        "Developed a Netflix clone website with responsive UI, dynamic movie browsing, and category-based content display. Integrated movie APIs, implemented secure authentication, and built interactive features like trailers and search functionality using a modern React-based architecture.",
    
    },
  ];

  return (
    <section id="project" className="projects">
      <div className="project-box">
        {projects.map(({ title, poster, live, description, tech }) => (
          <div className="book-card" key={title}>
            <div className="book">
              <div className="book-bg"></div>

              {/* Cover */}
              <div className="book-cover">
                <img src={poster} alt={title} loading="lazy" />
              </div>

              {/* Content */}
              <div className="book-content">
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>


                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                   <i className="bi bi-link-45deg me-1"></i> View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
