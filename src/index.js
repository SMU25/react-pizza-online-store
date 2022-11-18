import React from "react";
import ReactDOM from "react-dom/client";
import "scss/app.scss";
import "./services/i118n";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
