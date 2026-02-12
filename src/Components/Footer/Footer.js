import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
           
        <p>
  © {new Date().getFullYear()} Guna Sgs. Built with React ❤️
</p>


          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
