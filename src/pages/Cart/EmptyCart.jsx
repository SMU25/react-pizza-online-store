import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "components";
import { PATHNAMES } from "constants/routes";
import emptyCart from "assets/img/empty-cart.png";
import { T_PREFIX, GO_BACK_BUTTON_NAME } from "./constants";

const ALT_TEXT_IMG = "Empty cart";

export const EmptyCart = () => {
  const { t } = useTranslation();

  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <div>
        <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
        <p> Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      </div>
      <img src={emptyCart} alt={ALT_TEXT_IMG} />
      <Link to={PATHNAMES.HOME}>
        <Button className="button--black">
          <span>{t(`${T_PREFIX} - ${GO_BACK_BUTTON_NAME}`)}</span>
        </Button>
      </Link>
    </div>
  );
};
