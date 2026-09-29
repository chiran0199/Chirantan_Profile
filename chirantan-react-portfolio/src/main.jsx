import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/portfolio.css";
import "./styles/skills.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
