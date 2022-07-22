import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import { AuthContext } from "../../context/Auth";
import { Logo } from "../../components/Icons";
import Heading from "../../components/Heading";

const LogIn = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const { login, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) navigate("/category");

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) return;

    login({ email, password });
  };

  const logInForm = (
    <React.Fragment>
      <div className="auth">
        <Logo className="logo" />
        <Heading size="big">Login to your account</Heading>
        <Heading size="small">
          Good to see you again, enter your details below to continue ordering.{" "}
        </Heading>
        <Form onSubmit={onSubmit}>
          <Field label="Email">
            <Input type="email" name="email" placeholder="Email" />
          </Field>
          <Field label="Password">
            <Input type="password" name="password" placeholder="Password" />
          </Field>
          <Button long type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
  return <UnauthorizedLayout firstColumn={logInForm} />;
};

export default LogIn;
