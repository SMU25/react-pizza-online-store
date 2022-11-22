import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, PizzaCartItems } from "components";
import { PATHNAMES } from "constants/routes";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ReactComponent as ArrowLeft } from "assets/icons/grey-arrow-left.svg";

const T_PREFIX = "cart";
const HEADING = "title";
const TOTAL_COUNT_CART = "total-count";
const TOTAL_PRICE_CART = "total-price";
const CLEAR_CART_BUTTON_NAME = "clear-cart";
const GO_BACK_BUTTON_NAME = "go-back";
const PAY_BUTTON_NAME = "pay";

export const Cart = () => {
  const { t } = useTranslation();

  const {
    items: cartItems = [],
    totalPrice,
    totalCount,
  } = useSelector(({ cart }) => cart);

  const cartDetails = [
    {
      i118Key: `${T_PREFIX} - ${TOTAL_COUNT_CART}`,
      i18nParams: { totalCount },
    },
    {
      i118Key: `${T_PREFIX} - ${TOTAL_PRICE_CART}`,
      i18nParams: { totalPrice },
    },
  ];

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            {t(`${T_PREFIX} - ${HEADING}`)}
          </h2>
          <Button className="cart__clear" disabledDefaultStyle>
            <Trash />
            <span> {t(`${T_PREFIX} - ${CLEAR_CART_BUTTON_NAME}`)}</span>
          </Button>
        </div>
        <PizzaCartItems cartItems={cartItems} />
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            {cartDetails.map(({ i118Key, i18nParams }) => (
              <p key={i118Key}>
                <Trans i18nKey={i118Key}>{{ ...i18nParams }}</Trans>
              </p>
            ))}
          </div>
          <div className="cart__bottom-buttons">
            <Link to={PATHNAMES.HOME}>
              <Button className="button--add go-back-btn" outline>
                <ArrowLeft />
                <span>{t(`${T_PREFIX} - ${GO_BACK_BUTTON_NAME}`)}</span>
              </Button>
            </Link>
            <Button className="button pay-btn">
              <span>{t(`${T_PREFIX} - ${PAY_BUTTON_NAME}`)}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
