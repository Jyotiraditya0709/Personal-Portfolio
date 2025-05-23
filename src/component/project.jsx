import React from "react";
import Pic1 from "../assets/project-1.png";
import Pic2 from "../assets/project-2.png";
import Pic3 from "../assets/project-3.png";
export const Project = () => {
  return (
    <div>
      {" "}
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img src={Pic1} alt="Project 1" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Project One</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/Jmishra49'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/Jmishra49'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img src={Pic2} alt="Project 2" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Project Two</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/Jmishra49'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/Jmishra49'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img src={Pic3} alt="Project 3" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Project Three</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
    </div>
  );
};
