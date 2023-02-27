import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RpsContext from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RpsContext>
      <App />
    </RpsContext>
  </React.StrictMode>
);
