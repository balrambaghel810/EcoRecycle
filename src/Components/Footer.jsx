// Footer.jsx
import React from "react";
import "./Styles/Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">Ecorecycle</h2>
          <p className="footer-description">
            Sustainability for a better tomorrow
          </p>
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ecorecycle. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
