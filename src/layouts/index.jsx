import React from "react";

export const Page = ({ children, modifier = "" }) => {
  return <div className={`container ${modifier}`}>{children}</div>;
};

export const Grid = ({ children, modifier = "" }) => {
  return <div className={`grid ${modifier}`}>{children}</div>;
};

export const Cell = ({ children, size = 12, modifier = "" }) => {
  return (
    <div className={`cell cell--size-${size} ${modifier}`}>{children}</div>
  );
};
