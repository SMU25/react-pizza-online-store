import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const T_PREFIX = "not-found";
const HEADING = "title";
const DESCRIPTION = "description";

const NotFound = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const currentPage = pathname.split("/").reverse()[0];

  return (
    <div className="container not-found">
      <h2>{t(`${T_PREFIX} - ${HEADING}`)}</h2>
      <p>{t(`${T_PREFIX} - ${DESCRIPTION}`, { page: currentPage })}</p>
    </div>
  );
};

export default NotFound;
