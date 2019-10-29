import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";

import { configureStore } from "./store";
import "./styleSheet/index.css";

const rootElement: HTMLElement | null = document.getElementById("root");
const ConnectedApp = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(ConnectedApp, rootElement);
