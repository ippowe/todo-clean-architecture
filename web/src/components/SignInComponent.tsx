import React, {
  ChangeEvent,
  useState,
  useCallback,
  MouseEvent,
  FormEvent
} from "react";
import "../styleSheet/App.css";

interface PropsType {
  onClick: (email: string, password: string) => void;
}

export const SignInComponent: React.FC<PropsType> = props => {
  const { onClick } = props;
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("abc123");

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setPassword(evt.target.value);
  };

  const handleSubmit = useCallback(
    (evt: MouseEvent | FormEvent<HTMLFormElement>): void => {
      evt.preventDefault();
      onClick(email, password);
    },
    [email, password, onClick]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        SIGN IN
      </button>
    </form>
  );
};
