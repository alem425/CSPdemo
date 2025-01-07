import React, { useEffect } from "react";
import "./Cards.css";

const Cards: React.FC = () => {
  useEffect(() => {
    const handleOnMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const tiles = document.querySelectorAll<HTMLElement>(".tile");
    tiles.forEach((tile) => {
      tile.addEventListener("mousemove", handleOnMouseMove);
    });

    // Cleanup event listeners on unmount
    return () => {
      tiles.forEach((tile) =>
        tile.removeEventListener("mousemove", handleOnMouseMove)
      );
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="cards_container">
        <div className="tile1">
          {/* <div className="measurewrapper"> */}
          <img
            src="../src/assets/icons/innovation.png"
            alt=""
            className="measuredimg"
          />
          {/* </div> */}
          <h4 className="measuredtxt">Measured</h4>
          <h5 className="measuredsub">
            Our skills and talent system tracks the impact of learning enabling
            you to measure tangible ROI.
          </h5>
        </div>
        <div className="tile2">
          {/* <div className="equitablewrapper"> */}
          <img
            src="../src/assets/icons/technology.png"
            alt=""
            className="eqiimg"
          />
          {/* </div> */}
          <h4 className="equitabletxt">Equitable</h4>
          <h5 className="equitablesub">
            For skills to be retained, they must be applied through equitable
            opportunities in real-world contexts.
          </h5>
        </div>
        <div className="tile3">
          {/* <div className="smart-city_wrapper"> */}
          <img
            src="../src/assets/icons/smart-city.png"
            alt=""
            className="thirdtile"
          />
          {/* </div> */}
          <h4 className="thirdtiletext">Growth-Based</h4>
          <h5 className="thirdtilesub">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            omnis sit numquam vel voluptas veniam iure assumenda cupiditate.
          </h5>
        </div>
        <div className="tile4">
          {/* <div className="brain_wrapper"> */}
          <img
            src="../src/assets/icons/brain.png"
            alt=""
            className="fourthtileimg"
          />
          {/* </div> */}
          <h4 className="fouthtiletext">AI Driven</h4>
          <h5 className="fouthtiletext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            repellat voluptatem asperiores minus, atque sapiente vitae culpa.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Cards;
