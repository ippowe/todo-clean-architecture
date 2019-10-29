import React from "react";
import "../styleSheet/App.css";
import { Header } from "./Header";
import { UserComponent } from "./UserComponent";
import { SignInComponent } from "./SignInComponent";
import { SignUpComponent } from "./SignUpComponent";
import { SignOutButton } from "./SignOutButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <UserComponent user={null} />
      <SignInComponent onClick={console.log} />
      <SignUpComponent onClick={console.log} />
      <SignOutButton onClick={(): void => console.log("로그 아웃")} />
    </div>
  );
};

export default App;
