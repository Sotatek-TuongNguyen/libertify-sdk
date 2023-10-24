import React from "react";
import LibertifySdk, { LibertifySdkProps } from "./components/LibertifySdk";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App(props: LibertifySdkProps) {
  return (
    <Provider store={store}>
      <LibertifySdk {...props} />
    </Provider>
  );
}
