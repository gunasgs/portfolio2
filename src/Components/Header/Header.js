import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [nav, setNav] = useState(false);
  window.addEventListener("scroll", () => setNav(false));
  return (
    <>
      <nav className="navbaritems ">
        <div className="logo">
          <Link className="logoo" to="/">
            G
          </Link>
        </div>

        <ul className={nav ? "navmenu active" : "navmenu"}>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-btn">
          <button className="nav-btn " onClick={() => setNav(!nav)}>
            {nav ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list "></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
