import React from "react";
import cn from "classnames";

export const Button = ({ className, children }) => {
  return <button className={cn("button", className)}>{children}</button>;
};
