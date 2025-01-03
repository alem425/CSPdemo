import React from "react";
import { Place } from "../interfaces";

const ListGroup: React.FC<Place> = ({ items }) => {
  return (
    //fragment
    <>
      <h1>List of places Im tryna go</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
