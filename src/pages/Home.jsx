import React, { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaItems } from "redux/actions/pizzaItems";
import { setCategory } from "redux/actions/filters";
import { Categories, SortPopup, PizzaItems } from "components";
import { CATEGORIES_PIZZA } from "constants/categories";
import { SORT_ITEMS_PIZZA } from "constants/sortItems";

const T_PREFIX = "home";

const HEADING = "title";

export const Home = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { items: pizzaItems, isLoaded } = useSelector(
    ({ pizzaItems }) => pizzaItems
  );
  //CHANGE винести в селектори
  const { category, sortBy } = useSelector(({ filters }) => filters);
  //CHANGE винести в селектори

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
          categoriesPizza={CATEGORIES_PIZZA}
        />
        <SortPopup sortItemsPizza={SORT_ITEMS_PIZZA} />
      </div>
      <h2 className="content__title">{t(`${T_PREFIX} - ${HEADING}`)}</h2>
      <PizzaItems pizzaItems={pizzaItems} isLoaded={isLoaded} />
    </div>
  );
};
