import React from "react";

function Header() {
  return (
    <>
      <header id="header" class="fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <h1 class="logo me-auto me-lg-0">
            <a href="/" className="text-decoration-none">
              GUNA
            </a>
          </h1>

          {/* <a href="index.html" class="logo">
            <img src="" alt="" class="img-fluid" />
          </a> */}
          <nav id="navbar" class="navbar order-last order-lg-0 ">
            <ul>
              <li>
                <a class=" text-decoration-none" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#project">
                  Project
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
