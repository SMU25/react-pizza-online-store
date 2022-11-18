import React, { memo, useMemo } from "react";
import { PizzaCard } from "./PizzaCard";
import { LoadingPizzaCard } from "./LoadingPizzaCard";

const ARRAY_EMPTY_ELEMENTS = Array.from({ length: 12 });

export const PizzaItems = memo(({ isLoaded, pizzaItems }) => {
  const renderedPizzaItems = useMemo(() => {
    if (!isLoaded) {
      return ARRAY_EMPTY_ELEMENTS.map((_, index) => (
        <LoadingPizzaCard key={index} />
      ));
    } else if (pizzaItems?.length) {
      return pizzaItems.map((pizzaItem) => (
        <PizzaCard key={`${pizzaItem.name}_${pizzaItem.id}`} {...pizzaItem} />
      ));
    }
  }, [isLoaded, pizzaItems]);

  return <div className="content__items">{renderedPizzaItems}</div>;
});
