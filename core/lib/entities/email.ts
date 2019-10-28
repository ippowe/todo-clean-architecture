export class Email {
  address: string;

  constructor(address: string) {
    if (isInvalidAddress(address)) {
      throw new Error("Invalid email address");
    } else {
      this.address = address.toLowerCase();
    }
  }
}

const isInvalidAddress = (address: string): boolean => {
  const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !validEmailRegex.test(address);
};
