import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-container">
          <p>
            <a href="#cspV2">CSP V2.0</a>
          </p>
          <p>
            <a href="#employees">Employees</a>
          </p>
          <p>
            <a href="#individuals">Individuals</a>
          </p>
          <p>
            <a href="#programs">Programs</a>
          </p>
          <p>
            <a href="#aipower">AI Power</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
