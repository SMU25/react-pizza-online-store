import React, { useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components";
import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { ReactComponent as XMark } from "assets/icons/xmark.svg";

const IMG_ALT_TEXT = "Pizza";

const T_PREFIX = "pizza-card";
const TOTAL_PRICE_PIZZA = "total-price";
const SIZE_PIZZA_PARAM = "size";

export const PizzaCartItem = memo(
  ({
    id,
    items,
    totalPrice,
    totalCount,
    onMinusCartItem,
    onPlusCartItem,
    onRemoveCartItem,
  }) => {
    const { t } = useTranslation();

    const { name, imageUrl, type, size } = items[0];

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

    // const pizzaCount = useMemo(() => {
    //   const getCountPizzas = (type, size) =>
    //     items
    //       .filter((item) => item.type === type)
    //       .filter((item) => item.size === size);

    //   const obj = {
    //     thinSmall: getCountPizzas("thin", 26),
    //     thinMedium: getCountPizzas("thin", 30),
    //     thinBig: getCountPizzas("thin", 40),
    //     traditionalSmall: getCountPizzas("traditional", 26),
    //     traditionalMedium: getCountPizzas("traditional", 30),
    //     traditionalBig: getCountPizzas("traditional", 40),
    //   };

    //   return obj;
    // }, [items]);

    // const pizzaParamsInfo = Object.values(pizzaCount).map(
    //   (item) =>
    //     Boolean(item.length) && (
    //       <li>{`
    // ${t(`${T_PREFIX} - ${item[0].type}`)},
    // ${t(`${T_PREFIX} - ${SIZE_PIZZA_PARAM}`, { sizeName: item[0].size })}  x ${
    //         item.length
    //       }`}</li>
    //     )
    // );
    //CHANGE - підрахунок усіх піц
    // пофіксити хедер оипкий, із-за оверфлов в враппері не робить, а він потрібен для анімації

    const pizzaParamsInfo = `
  ${t(`${T_PREFIX} - ${type}`)},
  ${t(`${T_PREFIX} - ${SIZE_PIZZA_PARAM}`, { sizeName: size })}`;

    //CHANGE
    //пофіксити, щоб відображало кілька типів піц ,які замовляються і їх кількість
    // на даний омент ,якщо додати току і 26см(наприклад), то після додавання іншого типу, зміни не відобраються

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
          <h3>{t(`${T_PREFIX} - ${name}`)}</h3>
          <p>{pizzaParamsInfo}</p>
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
