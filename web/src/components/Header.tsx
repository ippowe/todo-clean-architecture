import React from "react";

import logo from "../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcom to React</h1>
    </header>
  );
};
