import React from "react";
import cn from "classnames";

export const Button = ({ children, className, outline, onClick }) => (
  <button
    className={cn("button", className, { "button--outline": outline })}
    onClick={onClick}
  >
    {children}
  </button>
);
