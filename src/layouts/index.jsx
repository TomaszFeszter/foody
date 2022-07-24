import React from "react";

export const Container = ({ children }) => {
  return <div className="container pl-10 pr-10">{children}</div>;
};

export const Aside = ({ children }) => {
  return <aside className="aside">{children}</aside>;
};

export const Main = ({ children }) => {
  return <div className="main">{children}</div>;
};

export const Layout = ({ children, center }) => {
  return (
    <div className={`layout ${center ? "layout--center" : ""}`}>{children}</div>
  );
};

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
