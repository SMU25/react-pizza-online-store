import React from "react";
import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { ReactComponent as XMark } from "assets/icons/xmark.svg";

const IMG_ALT_TEXT = "Pizza";

export const PizzaItem = ({ items }) => {
  const { name, imageUrl, type, size } = items[0];

  const addedCount = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt={IMG_ALT_TEXT} />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus">
          <Minus />
        </div>
        <b>{addedCount}</b>
        <div className="button button--outline button--circle cart__item-count-plus">
          <Plus />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice}</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle">
          <XMark />
        </div>
      </div>
    </div>
  );
};
