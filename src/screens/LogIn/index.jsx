import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input, { Field } from "../../components/Inputs";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import { AuthContext } from "../../context/Auth";

const LogIn = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const { login, user } = useContext(AuthContext);
  console.log("ze strony logowania", user);

  if (user) navigate("/");

  const onSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) return;

    login({ email, password });
  };

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
