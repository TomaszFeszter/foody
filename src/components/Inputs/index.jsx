import React from "react";

const Input = ({ ...rest }) => {
  return <input className="input" {...rest} />;
};

export const Field = ({ children, label = "", error = "", id }) => {
  return (
    <div className="field">
      <label htmlFor={id} className="label">
        {label}
      </label>
      {children}
      <p className="label label--error">{error}</p>
    </div>
  );
};

export const Checkbox = ({ ...rest }) => {
  return (
    <React.Fragment>
      <input className="checkbox" type="checkbox" {...rest} />
    </React.Fragment>
  );
};

export default Input;
