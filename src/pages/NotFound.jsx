import React from "react";
import { useTranslation } from "react-i18next";

const T_PREFIX = "not-found";

const HEADING = "title";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t(`${T_PREFIX} - ${HEADING}`)}</h2>
    </div>
  );
};
