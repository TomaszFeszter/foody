import React from "react";

function Heading({ children, size }) {
  if (size === "small") return <h3 className="h3">{children}</h3>;

  if (size === "big") return <h1 className="h1">{children}</h1>;

  return <h2 className="h2">{children}</h2>;
}

export default Heading;
