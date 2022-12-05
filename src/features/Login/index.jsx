import React, { useContext } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import { AuthContext } from "../../context/Auth";
import { Logo } from "../../components/Icons";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

console.log();

const LogIn = () => {
  const isDesktop = useMediaQuery("(max-width: 1200px)");
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
        {isDesktop && <Logo className="logo" />}
        <Heading size="big">Login to your account</Heading>
        <Heading size="small">
          Good to see you again, enter your details below to continue ordering.{" "}
        </Heading>
        <div className="auth__dev col-red">
          <Heading>You can login to test account.</Heading>
          <div className="auth__dev__group">
            <Heading>Email:</Heading>
            <Heading size="small" styles="italic">
              {process.env.REACT_APP_TEST_ACCOUNT_EMAIL}
            </Heading>
          </div>
          <div className="auth__dev__group">
            <Heading>Password:</Heading>
            <Heading size="small" styles="italic">
              {process.env.REACT_APP_TEST_ACCOUNT_EMAIL}
            </Heading>
          </div>
        </div>
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
          {isDesktop && (
            <Button onClick={() => navigate("/sign-up")} long secondary>
              Create an account
            </Button>
          )}
        </Form>
      </div>
    </React.Fragment>
  );
};

export default LogIn;
