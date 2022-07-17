import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import "./sass/main.scss";

export default function App() {
  return (
    <div>
      <Heading>
        Dupa twojej <Heading>Tak wielka jak szafa</Heading> starej
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
