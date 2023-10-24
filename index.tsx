import React from "react";
import ReactDOM from "react-dom/client";
import { LibertifySdkProps } from "./src/components/LibertifySdk";
import App from "./src/App";
import "react-toggle/style.css";

const libertify = {
  init: (element, { config, apiKey }: LibertifySdkProps) => {
    ReactDOM.createRoot(element).render(
      <App apiKey={apiKey} config={config} />
    );
  },
};

window["libertify"] = libertify;
