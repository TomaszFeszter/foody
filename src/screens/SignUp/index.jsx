import React, { useEffect } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import useFetch from "../../hooks/useFetch";

const SignUp = () => {
  const navigate = useNavigate();
  const { run, isSuccess } = useFetch(API.SIGN_UP());

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirm = formData.get("password-confirm");

    if (!email || !password || !passwordConfirm || password !== passwordConfirm)
      return;

    run({ method: "POST", body: JSON.stringify({ email, password }) });
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const signUpForm = (
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
      <Button type="submit">Sign up</Button>
    </Form>
  );
  return <UnauthorizedLayout firstColumn={signUpForm} />;
};

export default SignUp;
