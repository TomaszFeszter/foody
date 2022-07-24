import React, { useContext } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import { AuthContext } from "../../context/Auth";
import { Logo } from "../../components/Icons";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) return;

    login({ email, password });
  };

  return (
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
          <Button onClick={() => navigate("/sign-up")} long secondary>
            Create an account
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default LogIn;
