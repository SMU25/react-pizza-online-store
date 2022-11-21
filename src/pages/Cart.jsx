import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ReactComponent as ArrowLeft } from "assets/icons/grey-arrow-left.svg";
import PizzaCartItems from "components/PizzaCartItems";

const T_PREFIX = "cart";
const HEADING = "title";

export const Cart = () => {
  const { t } = useTranslation();

  const {
    items: cartItems = [],
    totalPrice,
    totalCount,
  } = useSelector(({ cart }) => cart);

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            {t(`${T_PREFIX} - ${HEADING}`)}
          </h2>
          <div className="cart__clear">
            <Trash />
            <span>Очистить корзину</span>
          </div>
        </div>
        {<PizzaCartItems cartItems={cartItems} />}
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>{totalCount} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>{totalPrice} </b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <ArrowLeft />
              <span>Вернуться назад</span>
            </a>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
