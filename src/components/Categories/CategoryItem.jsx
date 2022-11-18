import React from "react";
import { useTranslation } from "react-i18next";

const T_PREFIX = "categories";

export const CategoryItem = ({ name, className, setFilterBy }) => {
  const { t } = useTranslation();

  const onClick = () => setFilterBy(name);

  return (
    <li className={className} onClick={onClick}>
      {t(`${T_PREFIX} - ${name}`)}
    </li>
  );
};
