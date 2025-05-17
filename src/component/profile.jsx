import React from "react";
import profilePic from "../assets/profile-pic.png";
import Github from "../assets/github.png";
import Linkdin from "../assets/linkedin.png";
export const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div class="section__pic-container">
          <img src={profilePic} alt="jmishra profile picture" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Jyotiraditya Mishra</h1>
          <p class="section__text__p2">Full Stack Developer</p>
          <div class="btn-container">
            <button class="btn btn-color-2" onclick="window.open()">
              Download CV
            </button>
            <button
              class="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={Linkdin}
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://linkedin.com/'"
            />
            <img
              src={Github}
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/'"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
