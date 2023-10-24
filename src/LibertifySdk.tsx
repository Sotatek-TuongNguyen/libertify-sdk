import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { dispatch, store } from "./store";
import { SDKConfig, selectSDKConfig, setConfig } from "./store/configSlice";
import App from "./App";
import "./styles/font.css";
import "./styles/main.css";

export interface LibertifySdkProps {
  config: SDKConfig;
  apiKey: string;
}

const WithConfig = () => {
  const config = useSelector(selectSDKConfig);
  if (!config.initialized) return;
  return <App />;
};

export default function LibertifySdk({ config, apiKey }: LibertifySdkProps) {
  useEffect(() => {
    dispatch(setConfig(config));
  }, []);
  return (
    <Provider store={store}>
      <WithConfig />
    </Provider>
  );
}
