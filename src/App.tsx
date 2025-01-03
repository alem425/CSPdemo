import React from "react";
import Message from "./components/Message";
import Favorite from "./components/Favorite";
import ListGroup from "./components/ListGroup";
import "./App.css";

const App: React.FC = () => {
  const items = ["New York", "San Francisco", "Tokyo"];
  return (
    <div>
      <Message who="Alex" />
      <Favorite what="Chilling" />
      <ListGroup items={items} />
    </div>
  );
};

export default App;
