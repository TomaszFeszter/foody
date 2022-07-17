import React, { useState } from "react";
import Link from "../Links/links";

const Description = ({ content = "" }) => {
  const [open, setOpen] = useState(false);
  const summaryContent = content.slice(0, 50);
  const detailsContent = content.slice(50);
  return (
    <div>
      {summaryContent}
      {open && detailsContent}
      <span
        className="link"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "less" : "more"}
      </span>
    </div>
  );
};

export default Description;
