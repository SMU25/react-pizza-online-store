import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PizzaCard } from "./PizzaCard";
import { LoadingPizzaCard } from "./LoadingPizzaCard";

const ARRAY_EMPTY_ELEMENTS = Array.from({ length: 12 });

const T_PREFIX = "pizza-items";
const NO_DATA = "no-data";

export const PizzaItems = memo(({ isLoading, pizzaItems }) => {
  const { t } = useTranslation();

  const renderedPizzaItems = useMemo(() => {
    if (isLoading) {
      return ARRAY_EMPTY_ELEMENTS.map((_, index) => (
        <LoadingPizzaCard key={index} />
      ));
    } else if (pizzaItems?.length) {
      return pizzaItems.map((pizzaItem) => (
        <PizzaCard key={`${pizzaItem.name}_${pizzaItem.id}`} {...pizzaItem} />
      ));
    } else {
      return <h2>{t(`${T_PREFIX} - ${NO_DATA}`)}</h2>;
    }
  }, [isLoading, pizzaItems, t]);

  return <div className="content__items">{renderedPizzaItems}</div>;
});
