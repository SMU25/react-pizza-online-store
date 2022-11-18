import React from "react";
import { useTranslation } from "react-i18next";
import { T_PREFIX } from "./constants";

export const SortItem = ({ className, sortItem, setSortBy }) => {
  const { t } = useTranslation();

  const onClick = () => setSortBy(sortItem);

  return (
    <li className={className} onClick={onClick}>
      {t(`${T_PREFIX} - ${sortItem.name}`)}
    </li>
  );
};
