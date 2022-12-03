import React, { memo } from "react";
import cn from "classnames";

export const PizzaParameter = memo(
  ({ children, param, activeParam, availableParams, setActiveParameter }) => {
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
  }
);
