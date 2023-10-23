import React from "react";
import ReactDOM from "react-dom/client";
import LibertifySdk, { LibertifySdkProps } from "./src/components/LibertifySdk";

const libertify = {
  init: (element, { config, apiKey }: LibertifySdkProps) => {
    ReactDOM.createRoot(element).render(
      <LibertifySdk apiKey={apiKey} config={config} />
    );
  },
};

window["libertify"] = libertify;
