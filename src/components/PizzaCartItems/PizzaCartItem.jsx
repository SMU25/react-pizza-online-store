import React, { useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components";
import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { ReactComponent as XMark } from "assets/icons/xmark.svg";

const IMG_ALT_TEXT = "Pizza";

const T_PREFIX = "pizza-card";
const TOTAL_PRICE_PIZZA = "total-price";

export const PizzaCartItem = memo(
  ({
    id,
    items,
    totalPrice,
    totalCount,
    pizzaParamsInfo,
    onMinusCartItem,
    onPlusCartItem,
    onRemoveCartItem,
  }) => {
    const { t } = useTranslation();

    const { name, imageUrl } = items[0];

    const handleMinusItem = useCallback(
      () => onMinusCartItem(id),
      [id, onMinusCartItem]
    );

    const handlePlusItem = useCallback(
      () => onPlusCartItem(id),
      [id, onPlusCartItem]
    );

    const handleRemoveItem = useCallback(
      () => onRemoveCartItem(id),
      [id, onRemoveCartItem]
    );

    return (
      <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt={IMG_ALT_TEXT}
            draggable={false}
          />
        </div>
        <div className="cart__item-info">
          <h3 className="scrollbar-thumb-custom">
            {t(`${T_PREFIX} - ${name}`)}
          </h3>
          <ul>
            {pizzaParamsInfo.map(({ key, count }) => (
              <li key={key}>
                <p>{t(`${T_PREFIX} - ${key}`, { count })}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart__item-count">
          <Button
            className="button--circle cart__item-count-minus"
            onClick={handleMinusItem}
            outline
          >
            <Minus />
          </Button>
          <b>{totalCount}</b>
          <Button
            className="button--circle cart__item-count-plus"
            onClick={handlePlusItem}
            outline
          >
            <Plus />
          </Button>
        </div>
        <div className="cart__item-price">
          <b>{t(`${T_PREFIX} - ${TOTAL_PRICE_PIZZA}`, { totalPrice })}</b>
        </div>
        <div className="cart__item-remove">
          <Button className="button--circle" onClick={handleRemoveItem} outline>
            <XMark />
          </Button>
        </div>
      </div>
    );
  }
);
