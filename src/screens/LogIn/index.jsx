import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import API from "../../utils/api";
import useFetch from "../../hooks/useFetch";

const LogIn = () => {
  const navigate = useNavigate();
  const { run, isSuccess } = useFetch(API.LOGIN());
  const [showModal, setShowModal] = useState(true);

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) return;

    run({ method: "POST", body: JSON.stringify({ email, password }) });
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const logInForm = (
    <Form onSubmit={onSubmit}>
      {showModal && (
        <Modal handleClose={() => setShowModal(false)}>Modal</Modal>
      )}
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
  );
  return <UnauthorizedLayout firstColumn={logInForm} />;
};

export default LogIn;
