import React from "react";

const AddToCart = ({ allInOne, decrement, increment, qty }) => {
  return (
    <div className={`add-to-cart ${allInOne ? "add-to-cart--all-in-one" : ""}`}>
      <button onClick={decrement} className="qty-btn">
        -
      </button>
      <span className="qty-label">{qty}</span>
      <button onClick={increment} className="qty-btn">
        +
      </button>
    </div>
  );
};

export default AddToCart;
