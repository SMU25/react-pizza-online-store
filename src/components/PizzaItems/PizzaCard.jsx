import React, { useState, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "components/Button";
import { ReactComponent as Plus } from "assets/icons/plus.svg";

const PIZZA_TYPES = ["thin", "traditional"];
const PIZZA_SIZES = [26, 30, 40];
const PRICES_TYPES = { thin: 0, traditional: 25 };
const PRICES_SIZES = { 26: 0, 30: 10, 40: 50 };
//можна зробити вичислення залежно від ціни на піцу, щоб вираховувало ціну на бліьші розміри, наприклад: стоїть 150 , а я вираховую зі 150 наскільки дорожче буде 30 , тобто буде
//спочатку розмір 30 * 100 , а потім ділю на ціну(150) 3000/150 = 115%
// далі 15% * ціну(150) і ділю на розмір, а далі доплюсовую отримане число до ціни

const IMG_ALT_TEXT = "Pizza";

const T_PREFIX = "pizza-card";
const CENTIMETERS = "centimeters";
const PRICE = "price";
const ADD_BUTTON_NAME = "add";

export const PizzaCard = ({
  id,
  imageUrl,
  onAddToCart,
  name = "No name",
  addedCount = null,
  price = 0,
  types = [],
  sizes = [],
  // category,
  // rating,
}) => {
  const { t } = useTranslation();

  const [isActiveType, setIsActiveType] = useState(PIZZA_TYPES[types[0]]);
  const [isActiveSize, setIsActiveSize] = useState(sizes[0]);

  const onClickAddToCart = useCallback(() => {
    const pizzaObj = {
      id,
      name,
      imageUrl,
      price,
      type: isActiveType,
      size: isActiveSize,
    };

    onAddToCart(pizzaObj);
  }, [id, name, imageUrl, price, isActiveType, isActiveSize, onAddToCart]);

  //CHANGE змінити текст в константи і переводи додати
  //Pizza card винести в папку та розділити на компоненти типи, розміри (один компонент на 2 параметри назва PizzaCardParameter)
  //може і не потрібно виносити, подумаю
  //додати не цифри типи, а замінити на назву , зробити ціну фіксовану і , щоб підтягувало в заледності від типу і розміру, вирівнювання карток, зробити , щоб йшли по порядку
  //зробити карточки клікабельними, щоб при клікові додавало в корзину, можна зробити окрему сторінку під карточку
  //додати transition на типи і розміри
  // юзати компоненти для перекладу
  // щоббув прайс в баксах
  // В стилі додати Capitalize для усіх елементів

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={IMG_ALT_TEXT} />
      <h4 className="pizza-block__title">{t(`${T_PREFIX} - ${name}`)}</h4>
      <div className="pizza-block__selector">
        <ul>
          {PIZZA_TYPES.map((typeName, index) => (
            <li
              key={typeName}
              className={cn({
                active: isActiveType === typeName,
                disabled: !types.includes(index),
              })}
              onClick={() => setIsActiveType(typeName)}
            >
              {t(`${T_PREFIX} - ${typeName}`)}
            </li>
          ))}
        </ul>
        <ul>
          {PIZZA_SIZES.map((sizeName) => (
            <li
              key={sizeName}
              className={cn({
                active: isActiveSize === sizeName,
                disabled: !sizes.includes(sizeName),
              })}
              onClick={() => setIsActiveSize(sizeName)}
            >
              {sizeName} {t(`${T_PREFIX} - ${CENTIMETERS}`)}
            </li>
          ))}
        </ul>

        {/* <ul>
          <li name="" isActiveItem="name" items={[]}></li>
        </ul> */}
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {t(`${T_PREFIX} - ${PRICE}`, { price })}
        </div>
        <Button className="button--add" onClick={onClickAddToCart} outline>
          <Plus />
          <span>{t(`${T_PREFIX} - ${ADD_BUTTON_NAME}`)}</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
};
