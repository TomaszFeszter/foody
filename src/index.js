import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import FilterButton from "./components/FilterButton";
import Heading from "./components/Heading";
import { Heart, Logo } from "./components/Icons";
import Input, { Checkbox, Field } from "./components/Inputs";
import { KcalLabel, RatingLabel, TimeLabel } from "./components/Labels";
import "./sass/main.scss";

export default function App() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Button disabled>Create an account</Button>
      <Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Field label="TEST" error="TEST">
            <Input placeholder="Enter email" type="email" required />
          </Field>
          <Field label="Email" id="some-checkbox" error="TEST">
            <Checkbox required id="some-checkbox" />
          </Field>
          <button type="submit">clicktest</button>
          <FilterButton
            onClick={() => setActive(!active)}
            src={
              "https://png.pngtree.com/png-clipart/20190802/ourlarge/pngtree-classic-burger-fresh-veg-transparent-png-background-png-image_1645405.jpg"
            }
            active={active}
          >
            Burgers
          </FilterButton>
          <RatingLabel>4+</RatingLabel>
          <KcalLabel>2000kcal</KcalLabel>
          <TimeLabel>5-10min</TimeLabel>
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
