import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./styleshets/index.css";
import App from "./components/App.js";
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
