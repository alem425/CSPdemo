import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./containers/Header/Header";
const App: React.FC = () => {
  const items = ["New York", "San Francisco", "Tokyo"];
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
