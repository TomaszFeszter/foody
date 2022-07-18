import React from "react";
import ReactDOM from "react-dom/client";
// import Button from "./components/Button";
// import Description from "./components/Description";
// import FilterButton from "./components/FilterButton";
// import Heading from "./components/Heading";
// import { Heart, Logo } from "./components/Icons";
// import Input, { Checkbox, Field } from "./components/Inputs";
// import { KcalLabel, RatingLabel, TimeLabel } from "./components/Labels";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/main.scss";
import Home from "./screens/Home";
// import Category from "./screens/Category";
import Product from "./screens/Product";

export default function App() {
  // const [active, setActive] = useState(false);
  return (
    <div>
      {/* <Button disabled>Create an account</Button>
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
        <Description content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam officiis beatae maiores! Vitae sequi excepturi necessitatibus optio saepe? Excepturi explicabo delectus officiis deleniti maxime? Dolorem sit eum laborum neque?" />
        <Logo />
        <Heart width={100} height={100} />
        testowy <Heading>heading</Heading> stworzony za pomoca reacta
      </Heading> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
