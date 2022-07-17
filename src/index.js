import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import Heading from "./components/Heading";
import { Heart, Logo } from "./components/Icons";
import Input, { Checkbox, Field } from "./components/Inputs";
import "./sass/main.scss";

export default function App() {
  return (
    <div>
      <Button disabled>Create an account</Button>
      <Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Field label="Dupa" error="Twoja stara zapierdala za szybko">
            <Input placeholder="Enter email" type="email" required />
          </Field>
          <Field
            label="Email"
            id="some-checkbox"
            error="Twoja stara zapierdala za szybko"
          >
            <Checkbox required id="some-checkbox" />
          </Field>
          <button type="submit">clicktest</button>
        </form>
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
