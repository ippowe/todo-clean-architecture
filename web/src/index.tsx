import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { configureStore } from "./store";
import "./index.css";

const rootElement: HTMLElement | null = document.getElementById("root");
const ConnectedApp = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(ConnectedApp, rootElement);
