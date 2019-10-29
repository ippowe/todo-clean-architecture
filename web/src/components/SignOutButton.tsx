import React from "react";

import "../styleSheet/App.css";

interface PropsType {
  onClick: () => void;
}

export const SignOutButton: React.FC<PropsType> = props => (
  <button type="button" onClick={props.onClick}>
    SIGN OUT
  </button>
);
