import { Email } from "./email";

export class Credential {
  _email: Email;
  _password: string;

  constructor(email: string, password: string) {
    if (isPasswordInvalid(password)) {
      throw new Error("Your Password mus contains only letter and numbers");
    }

    this._email = new Email(email);
    this._password = password;
  }

  get email(): string {
    return this._email.address;
  }

  get password(): string {
    return this.password;
  }
}

const isPasswordInvalid = (password: string): boolean => {
  const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
  return !passwordRegex.test(password);
};
