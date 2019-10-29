import React from "react";
import "../styleSheet/App.css";
import { User } from "core";

interface PropsType {
  user: User | null;
}

export const UserComponent: React.FC<PropsType> = props => {
  return props.user ? (
    <div>
      <h3>Name is: {props.user.name}</h3>
      <h3>Email is: {props.user.email}</h3>
    </div>
  ) : (
    <h1>No user Logged In</h1>
  );
};
