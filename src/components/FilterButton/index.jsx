import React from "react";

function FilterButton({ name, active, image, ...rest }) {
  return (
    <button
      className={`filter-btn ${active ? "filter-btn--active" : ""}`}
      {...rest}
    >
      <span className="filter-btn__background">
        <img src={image} width={26} height={26} alt="filter preview" />
        <p className="filter-btn__caption">{name}</p>
      </span>
    </button>
  );
}

export default FilterButton;
