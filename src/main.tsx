import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";

import { I18nProvider } from "@utils/i18n/i18n-provider";

import App from "./app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </CookiesProvider>
  </React.StrictMode>
);
