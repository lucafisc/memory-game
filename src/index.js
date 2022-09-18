import React from "react";
import ReactDOM from "react-dom/client";
import Div100vh from "react-div-100vh";

import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Div100vh>
      <App />
    </Div100vh>
  </React.StrictMode>
);
