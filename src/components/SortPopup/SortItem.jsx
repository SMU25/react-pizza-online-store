import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { T_PREFIX } from "./constants";

export const SortItem = ({ className, activeItemId, sortItem, setSortBy }) => {
  const { t } = useTranslation();

  const { id, name } = sortItem;

  const onClick = () => setSortBy(sortItem);

  return (
    <li
      className={cn(className, { active: id === activeItemId })}
      onClick={onClick}
    >
      {t(`${T_PREFIX} - ${name}`)}
    </li>
  );
};
