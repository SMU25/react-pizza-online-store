import React from "react";
import { useTranslation } from "react-i18next";
import { T_PREFIX } from "./constants";

export const SortItem = ({ className, name, setSortBy, ...sortItem }) => {
  const { t } = useTranslation();

  const onClick = () => setSortBy(sortItem);

  return (
    <li className={className} onClick={onClick}>
      {t(`${T_PREFIX} - ${name}`)}
    </li>
  );
};
