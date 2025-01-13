import React from "react";
import "./Employees.css";
import Navbar from "../components/Navbar/Navbar";

const Employees: React.FC = () => {
  return (
    <div className="Employees">
      <Navbar />
      <div className="headercontainer">
        <div className="empltextcontainer">
          <h1 className="superchargetext">SUPERCHARGE YOUR WORKFORCE.</h1>
        </div>
      </div>
      <div className="csplogocard"></div>

      <div className="emplbodycontainer">
        <div className="equip">
          <h1 className="equiptxt">
            Equip your staff with tailor-made tech skills
          </h1>
          <h3 className="equipsubtxt">
            With over 300+ employer partners across the US, Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Modi hic voluptatibus vero
            corporis aperiam labore. Iste odio asperiores, iure eos consequatur
            quas veniam sint aut ab ratione. Ipsum, autem eaque?
          </h3>
        </div>
        <div className="boost">
          <h1 className="boosttxt">
            Boost employee retention and satisfaction
          </h1>
          <h3 className="boostsubtxt">
            94% of our apprentices remain with their employer
            post-apprenticeship. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Alias numquam quasi possimus animi repellendus
            sapiente officia. Necessitatibus laudantium, eveniet nulla molestias
            eaque assumenda ipsum quibusdam aut eum, eligendi modi veritatis.
          </h3>
        </div>
        <div className="diversity">
          <h1 className="diversitytxt">Improve workforce diversity</h1>
          <h3 className="diversitysubtxt">
            81% of clients expand their apprenticeship programs. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Repellat, autem!
            Consequatur reprehenderit enim ipsa voluptatum quaerat, animi quod
            eligendi at odit dolore id iusto tenetur officiis magnam totam
            consectetur rem!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Employees;
