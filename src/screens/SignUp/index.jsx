import React, { useContext } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import Heading from "../../components/Heading";
import { Logo } from "../../components/Icons";

const SignUp = () => {
  const { signUp, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoggedIn) navigate("/category");

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirm = formData.get("password-confirm");

    if (!email || !password || !passwordConfirm || password !== passwordConfirm)
      return;
    signUp({ email, password });
  };

  const signUpForm = (
    <React.Fragment>
      <div className="auth">
        <Logo className="logo" />
        <Heading size="big">Create an account</Heading>
        <Heading size="small">
          Welcome friend, enter your details so lets get started in ordering
          food.
        </Heading>
        <Form onSubmit={onSubmit}>
          <Field label="Email">
            <Input type="email" name="email" placeholder="Email" />
          </Field>
          <Field label="Password">
            <Input type="password" name="password" placeholder="Password" />
          </Field>
          <Field label="Password Confirm">
            <Input
              type="password"
              name="password-confirm"
              placeholder="Password Confirm"
            />
          </Field>
          <Button long type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
  return <UnauthorizedLayout firstColumn={signUpForm} />;
};

export default SignUp;
