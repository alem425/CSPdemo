import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home";
import App from "../src/App";
import "./index.css";
// Create root element
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
