import React from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Team Lead</p>
          <p>VFD Group</p>
          <p>
            <span>Jan'20 - May'24</span>
            <a href="/">
              <AddLocationIcon />
              Lagos, Nigeria
            </a>
          </p>
        </div>
        <div className="education">
          <p>Frontend Developer</p>
          <p>Bettys & Taylors Group</p>
          <p>
            <span>May'17 - Dec'19</span>
            <a href="/">
              <AddLocationIcon />
              Harrogate, UK
            </a>
          </p>
        </div>
        <div className="education">
          <p>Web Developer</p>
          <p>Studio Oxem</p>
          <p>
            <span>Oct'14 - Mar'17</span>
            <a href="/">
              <AddLocationIcon />
              Moscow, Russia
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelors of Science</p>
          <p>Moscow Power Engineering Institute</p>
          <p>
            <span>Sept'10 - Jul'14</span>
            <a href="/">
              <AddLocationIcon />
              Moscow, Russia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
