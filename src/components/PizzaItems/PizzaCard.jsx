import React, { useState, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components/Button";
import { PIZZA_TYPES, PIZZA_SIZES } from "constants/pizzaParameters";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { PizzaParameter } from "./PizzaParameter";

const PRICES_TYPES = { thin: 0, traditional: 25 };

const IMG_ALT_TEXT = "Pizza";

const T_PREFIX = "pizza-card";
const SIZE_PIZZA_PARAM = "size";
const PRICE_PIZZA = "price";
const ADD_BUTTON_NAME = "add";

export const PizzaCard = memo(
  ({
    id,
    imageUrl,
    onAddToCart,
    name = "No name",
    totalCountAdded = null,
    price = 0,
    types = [],
    sizes = [],
  }) => {
    const { t } = useTranslation();

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);

    //
    const numericalRatio = activeSize / sizes[0];
    const totalPricePizza =
      Math.round(numericalRatio * price) + PRICES_TYPES[activeType];
    //
    const onClickAddToCart = useCallback(() => {
      const pizzaObj = {
        id,
        name,
        imageUrl,
        price: totalPricePizza,
        type: activeType,
        size: activeSize,
      };

      onAddToCart(pizzaObj);
    }, [
      id,
      name,
      imageUrl,
      totalPricePizza,
      activeType,
      activeSize,
      onAddToCart,
    ]);

    //CHANGE-  зробити ціну фіксовану і , щоб підтягувало в заледності від типу і розміру
    //зробити карточки клікабельними, можна зробити окрему сторінку під карточку
    //додати transition на типи і розміри
    // юзати компоненти для перекладу
    // щоббув прайс в баксах
    //Додати додавання збереження в localStorage

    return (
      <div className="pizza-block">
        <div className="pizza-block__info" onClick={onClickAddToCart}>
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt={IMG_ALT_TEXT}
            draggable={false}
          />
          <h4 className="pizza-block__title">{t(`${T_PREFIX} - ${name}`)}</h4>
        </div>
        <div className="pizza-block__selector">
          <ul>
            {PIZZA_TYPES.map((typeName) => (
              <PizzaParameter
                key={typeName}
                param={typeName}
                activeParam={activeType}
                availableParams={types}
                setActiveParameter={setActiveType}
              >
                {t(`${T_PREFIX} - ${typeName}`)}
              </PizzaParameter>
            ))}
          </ul>
          <ul>
            {PIZZA_SIZES.map((sizeName) => (
              <PizzaParameter
                key={sizeName}
                param={sizeName}
                activeParam={activeSize}
                availableParams={sizes}
                setActiveParameter={setActiveSize}
              >
                {t(`${T_PREFIX} - ${SIZE_PIZZA_PARAM}`, { sizeName })}
              </PizzaParameter>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">
            {t(`${T_PREFIX} - ${PRICE_PIZZA}`, { price: totalPricePizza })}
          </div>
          <Button className="button--add" onClick={onClickAddToCart} outline>
            <Plus />
            <span>{t(`${T_PREFIX} - ${ADD_BUTTON_NAME}`)}</span>
            {totalCountAdded && <i>{totalCountAdded}</i>}
          </Button>
        </div>
      </div>
    );
  }
);
