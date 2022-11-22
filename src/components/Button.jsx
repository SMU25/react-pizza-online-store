import React from "react";
import cn from "classnames";

export const Button = ({
  children,
  className,
  outline,
  onClick,
  disabledDefaultStyle = false,
}) => (
  <button
    className={cn(className, {
      button: !disabledDefaultStyle,
      "button--outline": outline,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
