import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import { LANGUAGES } from "constants/languages";
import { PATHNAMES } from "constants/routes";
import { ReactComponent as Cart } from "assets/icons/cart.svg";
import { LanguageChooser } from "./LanguageChooser";
import { Logo } from "./Logo";

const T_PREFIX = "header";
const PRICE = "price";

const LOGO_SIZE_WIDTH = 38;

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <LanguageChooser languages={LANGUAGES} />
      <div className="container">
        <Logo width={LOGO_SIZE_WIDTH} />
        <div className="header__cart">
          <Link to={PATHNAMES.CART}>
            <Button className="button--cart">
              <span>{t(`${T_PREFIX} - ${PRICE}`, { price: 520 })}</span>
              <div className="button__delimiter"></div>
              <Cart />
              <span>12</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
