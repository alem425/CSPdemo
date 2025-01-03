import React from "react";
import { FavoriteSkeleton } from "../interfaces";

const Favorite: React.FC<FavoriteSkeleton> = ({ what }) => {
  return (
    <div>
      <h1>My Fav thing to do is {what}</h1>
    </div>
  );
};

export default Favorite;
