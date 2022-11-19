import React, { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaItems } from "redux/actions/pizzaItems";
import { setCategory, setSortBy } from "redux/actions/filters";
import { Categories, SortPopup, PizzaItems } from "components";
import { CATEGORIES_PIZZA } from "constants/categories";
import { SORT_ITEMS_PIZZA } from "constants/sortItems";

const T_PREFIX = "home";

export const Home = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { items: pizzaItems, isLoading } = useSelector(
    ({ pizzaItems }) => pizzaItems
  );
  //CHANGE винести в селектори
  const { category, sortBy } = useSelector(({ filters }) => filters);
  //CHANGE винести в селектори

  useEffect(() => {
    dispatch(getPizzaItems(category, sortBy));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (name) => dispatch(setCategory(name)),
    [dispatch]
  );

  const onSelectSortBy = useCallback(
    (type) => dispatch(setSortBy(type)),
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onSelectCategory={onSelectCategory}
          categoriesPizza={CATEGORIES_PIZZA}
        />
        <SortPopup
          sortBy={sortBy}
          onSelectSortBy={onSelectSortBy}
          sortItemsPizza={SORT_ITEMS_PIZZA}
        />
      </div>
      <h2 className="content__title">{t(`${T_PREFIX} - ${category}`)}</h2>
      <PizzaItems pizzaItems={pizzaItems} isLoading={isLoading} />
    </div>
  );
};
