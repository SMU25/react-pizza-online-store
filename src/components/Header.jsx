import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button } from "components/Button";
import { LANGUAGES } from "constants/languages";
import { PATHNAMES } from "constants/routes";
import { ReactComponent as Cart } from "assets/icons/cart.svg";
import { LanguageChooser } from "./LanguageChooser";
import { Logo } from "./Logo";

const T_PREFIX = "header";
const TOTAL_PRICE_TEXT = "total-price";

const LOGO_SIZE_WIDTH = 38;

export const Header = () => {
  const { t } = useTranslation();

  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <LanguageChooser languages={LANGUAGES} />
      <div className="container">
        <Logo width={LOGO_SIZE_WIDTH} />
        <div className="header__cart">
          <Link to={PATHNAMES.CART}>
            <Button className="button--cart">
              <span>
                {t(`${T_PREFIX} - ${TOTAL_PRICE_TEXT}`, { totalPrice })}
              </span>
              <div className="button__delimiter"></div>
              <Cart />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
