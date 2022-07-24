import React, { useRef } from "react";

function Form({ children, onSubmit, styles = "", ...rest }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    onSubmit(formData);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`form ${styles}`}
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
