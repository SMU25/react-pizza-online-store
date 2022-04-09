import React from "react";

export const Button = ({ className, children }) => {
  return <button className={`button ${className}`}>{children}</button>;
};
