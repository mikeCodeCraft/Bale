
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
