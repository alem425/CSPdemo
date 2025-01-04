import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// Create root element
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
