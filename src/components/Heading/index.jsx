import React from "react";

export default function Heading({ children, size }) {
  if (size === "small") return <h4 className="text-xl">{children}</h4>;

  if (size === "big") return <h1 className="text-3xl">{children}</h1>;

  return <h2 className="text-2xl">{children}</h2>;
}
