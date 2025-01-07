import React from "react";
import "./Orgs.css";

const Orgs: React.FC = () => {
  return (
    <div className="orgs_container">
      <div className="text_container">
        <h4>TRUSTED BY TEAMS AT</h4>
      </div>
      <div className="logo_containers">
        <div id="cards">
          <div className="card">
            <img
              src="../src/assets/logos/google.png"
              alt=""
              className="google"
            />
          </div>
          <div className="card">
            <img
              src="../src/assets/logos/Microsoft2.png"
              alt=""
              className="microsoft"
            />
          </div>
          <div className="card">
            <img src="../src/assets/logos/Meta.png" alt="" className="meta" />
          </div>
          <div className="card">
            <img src="../src/assets/logos/Intel.png" alt="" className="intel" />
          </div>
          <div className="card">
            <img
              src="../src/assets/logos/Openai.png"
              alt=""
              className="openai"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orgs;
