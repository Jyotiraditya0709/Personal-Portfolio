import React from "react";
import ProfilePic from "../assets/about-pic.png";
import Experience from "../assets/experience.png";
import Education from "../assets/education.png";

export const About = () => {
  return (
    <div>
      {" "}
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img
              src={ProfilePic}
              alt="Jyotiraditya Mishra profile"
              class="about-pic"
            />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src={Experience}
                  alt="Black experience icon"
                  class="icon"
                />
                <h3>Skills</h3>
                <p>
                  Web Development
                  <br />
                  React, JavaScript, HTML, CSS
                </p>
              </div>
              <div class="details-container">
                <img src={Education} alt="Black education icon" class="icon" />
                <h3>Education</h3>
                <p>Computer Science</p>
              </div>
            </div>
            <div class="text-container">
              <p>
              I’m a passionate Full Stack Developer and Computer Science student at Chitkara University with hands-on experience in building dynamic web applications using React, Node.js, Express, and MongoDB. I’ve worked on projects like a Food Ordering App with Stripe integration and a Faculty Management System that improve usability and functionality. I’m also an avid problem solver with 300+ LeetCode problems solved. </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
    </div>
  );
};
