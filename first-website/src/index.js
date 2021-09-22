import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <title>Global Science Academy</title>
  </BrowserRouter>,
  document.getElementById("root")
);
