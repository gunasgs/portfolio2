import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            Designed by &copy;
            <a
              href="https://gunaseelan.netlify.com"
              target="_blank"
              rel="noreferrer"
              className="ms-2"
            >
              Gunasgs
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
