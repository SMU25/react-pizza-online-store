import React, { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalPricePizza } from "redux/actions/pizzaItems";
import { addPizzaToCart } from "redux/actions/cart";
import { selectCartItems } from "redux/selectors/cart";
import { PizzaCard } from "./PizzaCard";
import { LoadingPizzaCard } from "./LoadingPizzaCard";

const ARRAY_EMPTY_ITEMS = Array.from({ length: 12 });

const T_PREFIX = "pizza-items";
const NO_DATA_TEXT = "no-data";

export const PizzaItems = memo(({ isLoading, pizzaItems }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const updateTotalPrice = useCallback(
    (obj) => dispatch(updateTotalPricePizza(obj)),
    [dispatch]
  );

  const onAddToCart = useCallback(
    (pizzaObj) => dispatch(addPizzaToCart(pizzaObj)),
    [dispatch]
  );

  const renderedPizzaItems = useMemo(() => {
    if (isLoading) {
      return ARRAY_EMPTY_ITEMS.map((_, index) => (
        <LoadingPizzaCard key={index} />
      ));
    } else if (pizzaItems?.length) {
      return pizzaItems.map((pizzaItem) => (
        <PizzaCard
          key={`${pizzaItem.name}_${pizzaItem.id}`}
          onAddToCart={onAddToCart}
          updateTotalPrice={updateTotalPrice}
          totalCountAdded={cartItems[pizzaItem.id]?.totalCount}
          {...pizzaItem}
        />
      ));
    } else {
      return <h2>{t(`${T_PREFIX} - ${NO_DATA_TEXT}`)}</h2>;
    }
  }, [isLoading, pizzaItems, cartItems, onAddToCart, updateTotalPrice, t]);

  return (
    <div className="content__items content__items--home">
      {renderedPizzaItems}
    </div>
  );
});
