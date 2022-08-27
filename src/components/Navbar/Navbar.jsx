import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">EmoGuide</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="nav-bar-id" activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-bar-id" to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link className="nav-bar-id" to="works" spy={true} smooth={true}>
                Collabs
              </Link>
            </li>
            <li>
              <Link className="nav-bar-id" to="portfolio" spy={true} smooth={true}>
                Teachings
              </Link>
            </li>
            <li>
              <Link className="nav-bar-id" to="testimonial" spy={true} smooth={true}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
