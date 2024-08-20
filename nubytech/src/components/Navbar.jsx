import { useState } from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div className="header-sect-1">
          <div className="logo">
            <h1 className="logo-name">NubyTech</h1>
          </div>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Oppurtunites</li>
              <li>Portfolio</li>
              <li>The Team</li>
            </ul>
          </nav>
        </div>
        <div className="contact-btn-div">
          <button>Contact Us</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
