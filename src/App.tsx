import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Employees from "./Pages/Employees";
import Individuals from "./Pages/Individuals";
import SignIn from "./Pages/SignIn";
import Programs from "./Pages/Programs";
import AIPower from "./Pages/AIPower";
import Login from "./Pages/LogIn";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/aipower" element={<AIPower />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
