import React from "react";
import cn from "classnames";

export const PizzaParameter = ({
  children,
  param,
  activeParam,
  availableParams,
  setActiveParameter,
}) => {
  const onClick = () => setActiveParameter(param);

  return (
    <li
      className={cn({
        active: activeParam === param,
        disabled: !availableParams.includes(param),
      })}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
