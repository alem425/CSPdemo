import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./containers/Header/Header";
import Orgs from "./components/TrustedOrgs/Orgs";
import CSPmodel from "./containers/CPSmodel/CSPmodel";
const App: React.FC = () => {
  const items = ["New York", "San Francisco", "Tokyo"];
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Orgs />
      <CSPmodel />
    </div>
  );
};

export default App;
