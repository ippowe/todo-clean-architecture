import React, { ChangeEvent, useState, FormEvent, MouseEvent } from "react";
import "../styleSheet/App.css";

interface PropsType {
  onClick: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
}

export const SignUpComponent: React.FC<PropsType> = props => {
  const [user, setUser] = useState({
    firstName: "EduarDo",
    lastName: "MoRoni",
    email: "email.@email.com",
    password: "abc123"
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (evt: MouseEvent | FormEvent<HTMLFormElement>): void => {
    const { firstName, lastName, email, password } = user;
    evt.preventDefault();
    props.onClick(firstName, lastName, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        firstName:
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        lastName:
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label>
        password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        SIGN UP
      </button>
    </form>
  );
};
