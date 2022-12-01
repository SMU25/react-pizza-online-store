import React, { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { addPizzaToCart } from "redux/actions/cart";
import { PizzaCard } from "./PizzaCard";
import { LoadingPizzaCard } from "./LoadingPizzaCard";

const ARRAY_EMPTY_ELEMENTS = Array.from({ length: 12 });

const T_PREFIX = "pizza-items";
const NO_DATA_TEXT = "no-data";

export const PizzaItems = memo(({ isLoading, pizzaItems }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const cartItems = useSelector(({ cart }) => cart.items);
  //CHANGE винести в селектори

  const onAddToCart = useCallback(
    (pizzaObj) => dispatch(addPizzaToCart(pizzaObj)),
    [dispatch]
  );

  const renderedPizzaItems = useMemo(() => {
    if (isLoading) {
      return ARRAY_EMPTY_ELEMENTS.map((_, index) => (
        <LoadingPizzaCard key={index} />
      ));
    } else if (pizzaItems?.length) {
      return pizzaItems.map((pizzaItem) => (
        <PizzaCard
          key={`${pizzaItem.name}_${pizzaItem.id}`}
          onAddToCart={onAddToCart}
          totalCountAdded={cartItems[pizzaItem.id]?.totalCount}
          {...pizzaItem}
        />
      ));
    } else {
      return <h2>{t(`${T_PREFIX} - ${NO_DATA_TEXT}`)}</h2>;
    }
  }, [isLoading, pizzaItems, cartItems, onAddToCart, t]);

  return <div className="content__items">{renderedPizzaItems}</div>;
});
