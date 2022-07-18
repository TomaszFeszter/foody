import React from "react";

const Box = ({ children, center, column }) => {
  return (
    <div className={`box ${center ? "center" : ""} ${column ? "column" : ""}`}>
      {children}
    </div>
  );
};

export default Box;
