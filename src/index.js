import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import { Heart, Logo } from "./components/Icons";
import "./sass/main.scss";

export default function App() {
  return (
    <div>
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
