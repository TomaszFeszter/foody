import React, { useContext } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import Heading from "../../components/Heading";
import { Logo } from "../../components/Icons";
import useMediaQuery from "../../hooks/useMediaQuery";

const SignUp = () => {
  const isDesktop = useMediaQuery("(max-width: 1200px)");
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    // const phoneNumber = formData.get("phone");
    const password = formData.get("password");
    const passwordConfirm = formData.get("password-confirm");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !passwordConfirm ||
      password !== passwordConfirm
    )
      return;
    signUp({
      email,
      password,
      firstName,
      lastName,
    });
  };

  return (
    <React.Fragment>
      <div className="auth">
        {isDesktop && <Logo className="logo" />}
        <Heading size="big">Create an account</Heading>
        <Heading size="small">
          Welcome friend, enter your details so lets get started in ordering
          food.
        </Heading>
        {isDesktop ? (
          process.env.REACT_APP_TEST_ACCOUNT_EMAIL &&
          process.env.REACT_APP_TEST_ACCOUNT_EMAIL ? (
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
                  {process.env.REACT_APP_TEST_ACCOUNT_PASSWORD}
                </Heading>
              </div>
            </div>
          ) : null
        ) : null}
        <Form onSubmit={onSubmit}>
          <Field label="First name">
            <Input type="text" name="first-name" placeholder="First name" />
          </Field>
          <Field label="Last name">
            <Input type="text" name="last-name" placeholder="Last name" />
          </Field>
          <Field label="Email">
            <Input type="email" name="email" placeholder="Email" />
          </Field>
          <Field label="Phone number">
            <Input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              name="phone"
              placeholder="Number format: 123-456-789"
            />
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
          {isDesktop && (
            <Button onClick={() => navigate("/log-in")} long secondary>
              Go to login
            </Button>
          )}
        </Form>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
