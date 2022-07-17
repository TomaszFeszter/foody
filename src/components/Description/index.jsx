import React, { useState } from "react";

const Description = ({ content = "" }) => {
  const [open, setOpen] = useState(false);
  const summaryContent = content.slice(0, 50);
  const detailsContent = content.slice(50);
  return (
    <div className="h3">
      {summaryContent}
      {open && detailsContent}
      {content.length >= 50 && (
        <span
          className="link ml-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "less" : "more"}
        </span>
      )}
    </div>
  );
};

export default Description;
