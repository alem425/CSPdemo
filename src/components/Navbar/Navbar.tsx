import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-container">
          <p>
            <Link to="/">CSP V2.0</Link>
          </p>
          <p>
            <Link to="/employees">Employees</Link>
          </p>
          <p>
            <Link to="/individuals">Individuals</Link>
          </p>
          <p>
            <Link to="/programs">Programs</Link>
          </p>
          <p>
            <Link to="/aipower">AI Power</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
