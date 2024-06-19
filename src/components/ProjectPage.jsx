import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Blog</p>
          <p>BlogShop</p>
          <p>
            <span></span>
            <a href="https://blogshop.io/">Tap to view</a>
          </p>
        </div>
        <div className="project">
          <p>Housing</p>
          <p>Real Estate Project</p>
          <p>
            <span></span>
            <a href="https://github.com/ShittuAyodeji/Real-Estate-Project">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Game</p>
          <p>Cart Game</p>
          <p>
            <span></span>
            <a href="https://github.com/ShittuAyodeji/Cart-Game">Tap to view</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
