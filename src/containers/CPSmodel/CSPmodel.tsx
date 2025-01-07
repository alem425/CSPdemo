import React from "react";
import "./CSPmodel.css";
import Cards from "../../components/Cards/Cards";
const CSPmodel: React.FC = () => {
  return (
    <div className="cspmode_container">
      <div className="introtext">
        <h4>INTRODUCING</h4>
      </div>
      <div className="csptext">
        <h4>The CSP Learning Model</h4>
      </div>
      <Cards />
    </div>
  );
};

export default CSPmodel;
