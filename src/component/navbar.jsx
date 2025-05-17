import React from "react";
import "../App.css";

export const Navbar = () => {
  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo">Jyotiraditya Mishra</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="#skills">Skills</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/src/assets/JmishraResume (1).pdf" download>Download CV</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
