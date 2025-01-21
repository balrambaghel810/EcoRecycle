// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Styles/Navbar.css"; // Import the CSS file
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from ".././assets/EcoLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="navbar-link"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="navbar-link"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="navbar-link"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="navbar-link"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="navbar-link"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? <GiHamburgerMenu /> : <ImCross />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
