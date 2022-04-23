import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Selim</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="testimonial" smooth={true}>
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button n-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
