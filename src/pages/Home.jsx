import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaItem } from "components";

import { getPizzaItems } from "redux/actions/pizzaItems";
import { setCategory } from "redux/actions/filters";

const categoriesPizza = [
  { name: "Все", type: "all" },
  { name: "Мясные", type: "meat" },
  { name: "Вегетарианские", type: "vegetarian" },
  { name: "Гриль", type: "grill" },
  { name: "Острые", type: "spicy" },
  { name: "Закрытые", type: "closed" },
];

const sortItemsPizza = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

export const Home = () => {
  const dispatch = useDispatch();

  const { items: pizzaItems, isLoaded } = useSelector(
    ({ pizzaItems }) => pizzaItems
  );
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(getPizzaItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const onSelectCategory = useCallback(
    (name) => dispatch(setCategory(name)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onSelectCategory={onSelectCategory}
          categoriesPizza={categoriesPizza}
        />
        <SortPopup sortItemsPizza={sortItemsPizza} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaItems &&
          pizzaItems.map((pizzaItem) => (
            <PizzaItem
              key={`${pizzaItem.name}_ ${pizzaItem.id}`}
              isLoaded={isLoaded}
              {...pizzaItem}
            />
          ))}
      </div>
    </div>
  );
};
