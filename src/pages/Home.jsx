import React from "react";

import { Categories, SortPopup, PizzaItem } from "components";

export const Home = ({ pizzaItems, isLoading }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">
        {isLoading ? "Loading..." : "Все пиццы"}
      </h2>
      <div className="content__items">
        {pizzaItems.map((pizzaItem) => (
          <PizzaItem
            key={`${pizzaItem.name}_ ${pizzaItem.id}`}
            {...pizzaItem}
          />
        ))}
      </div>
    </div>
  );
};
