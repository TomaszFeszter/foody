import React from "react";
import { Fire, Star } from "../Icons";

export const RatingLabel = ({ children }) => {
  return (
    <strong className="body label">
      <Star className="mr-2" />
      {children}
    </strong>
  );
};

export const KcalLabel = ({ children }) => {
  return (
    <strong className="body label">
      <Fire className="mr-2" />
      {children}
    </strong>
  );
};

export const TimeLabel = ({ children }) => {
  return (
    <strong className="body label">
      🕑
      {/* <Clock className="mr-2" /> */}
      {children}
    </strong>
  );
};
