import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import Heading from "./components/Heading";
import { Heart, Logo } from "./components/Icons";
import "./sass/main.scss";

export default function App() {
  return (
    <div>
      <Button disabled>Create an account</Button>
      <Heading>
        <Logo />
        <Heart width={100} height={100} />
        testowy <Heading>heading</Heading> stworzony za pomoca reacta
      </Heading>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
