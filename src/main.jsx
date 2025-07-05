import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/index.css";


import { registerSW } from "virtual:pwa-register";


registerSW({
  onNeedRefresh() {
    console.log("A new version is available. Reload to update.");
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
});

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
