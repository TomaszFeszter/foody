import React from "react";

function FilterButton({ children, active, src, ...rest }) {
  return (
    <button
      className={`filter-btn ${active ? "filter-btn--active" : ""}`}
      {...rest}
    >
      <span className="filter-btn__background">
        <img src={src} width={26} height={26} alt="filter preview" />
        {children}
      </span>
    </button>
  );
}

export default FilterButton;
