import React from "react";

export const Page = ({ children, modifier = "" }) => {
  return <div className={`container pl-10 pr-10 ${modifier}`}>{children}</div>;
};

export const Grid = ({ children, modifier = "" }) => {
  return <div className={`grid ${modifier}`}>{children}</div>;
};

export const Cell = ({ children, size = 12, modifier = "" }) => {
  return (
    <div className={`cell cell--size-${size} ${modifier}`}>{children}</div>
  );
};
