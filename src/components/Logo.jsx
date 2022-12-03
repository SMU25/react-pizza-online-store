import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PATHNAMES } from "constants/routes";
import { ReactComponent as PizzaLogo } from "assets/icons/pizza-logo.svg";

const T_PREFIX = "logo";
const HEADING = "title";
const DESCRIPTION = "description";

export const Logo = memo(({ width, height }) => {
  const { t } = useTranslation();

  return (
    <Link to={PATHNAMES.HOME}>
      <div className="header__logo">
        <PizzaLogo width={width} height={height} />
        <div>
          <h1>{t(`${T_PREFIX} - ${HEADING}`)}</h1>
          <p>{t(`${T_PREFIX} - ${DESCRIPTION}`)}</p>
        </div>
      </div>
    </Link>
  );
});
