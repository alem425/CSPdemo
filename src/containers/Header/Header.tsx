import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="imgheader-container">
      <div className="textcontainer">
        <h1>Solve Your</h1>
        <div className="techtalent">
          <h1>
            <mark>Technical</mark>
          </h1>
          <h1>
            <mark>Talent</mark>
          </h1>
        </div>
        <h1>Skill Gaps Now</h1>
        <h3>
          Transform untapped people potential into business performance with the
          CSP platform.
        </h3>
        <div className="button_container">
          <button className="button">
            <h1>Contact Sales</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
