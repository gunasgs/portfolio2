import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <header id="header" class="fixed-top">
        <div class="container-fluid d-flex align-items-center justify-content-between">
          <div>
            <p class="logo ">
              <a href="/" className="nav-link-1 logoo">
                GUNA
              </a>
            </p>
          </div>
          <nav id="navbar" className={nav ? "navbar-mobile" : "navbar"}>
            <ul className={nav ? "navbar-mobile-ul" : "navbar-pc"}>
              <li>
                <a class=" nav-link-1" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link-1" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link-1" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-link-1" href="#project">
                  Project
                </a>
              </li>
              <li>
                <a className="nav-link-1" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <button
              className="nav-btn mobile-nav-toggle"
              onClick={() => setNav(!nav)}
            >
              {nav ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list "></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
