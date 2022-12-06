import React from "react";
import { User } from "../Icons";

export function Avatar({ src, small, modifier = "" }) {
  return (
    <figure className={`avatar ${small ? "avatar--small" : ""} ${modifier}`}>
      {src ? (
        <img src={src} alt="user avatar" />
      ) : (
        <User width="100%" height="100%" strokeWidth="1.5" />
      )}
    </figure>
  );
}
