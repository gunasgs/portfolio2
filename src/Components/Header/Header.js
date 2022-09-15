import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [nav, setNav] = useState(false);
  window.addEventListener("scroll", () => setNav(false));
  return (
    <>
      <nav class="navbaritems ">
        <div className="logo">
          <a className="logoo" href="/">
            G
          </a>
        </div>

        <ul className={nav ? "navmenu active" : "navmenu"}>
          <li>
            <a class="nav-link" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a class="nav-link" href="#project">
              Project
            </a>
          </li>
          <li>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-btn">
          <button className="nav-btn " onClick={() => setNav(!nav)}>
            {nav ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list "></i>}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
